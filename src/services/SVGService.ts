import Tiger from "../assets/tiger.svg?raw";
import Loading from "../assets/loading.svg?raw";
import { ref, Ref } from "vue";
import { PanzoomObject } from "@panzoom/panzoom";
import corruptions from "../utils/corruptions.ts";
import { CorruptionMode } from "../index";

class SVGService {
  private parser = new DOMParser();
  private svgElement: Ref<SVGElement> | null = null;
  private originalSvgString = "";
  private originalSvgNode: Node | null = null;
  private panZoom: PanzoomObject | null = null;
  private targetValuesArray: number[] = [];
  private targetValuesRegexp: RegExp = new RegExp("0", "gi");
  private replaceValue = "0";

  public corruptionModes: Ref<CorruptionMode[]> = ref(corruptions);

  public get currentCorruptionMode() {
    return this.corruptionModes.value.find((mode) => mode.active)!;
  }

  private get disableCorrupt() {
    return (
      this.targetValuesArray.length === 0 && !this.currentCorruptionMode.random
    );
  }

  public addCorrupter(corrupter: CorruptionMode) {
    this.corruptionModes.value.push(corrupter);
  }

  public async init(svg: Ref<SVGElement>, panZoom: PanzoomObject) {
    this.svgElement = svg;
    this.panZoom = panZoom;
    await this.loadFromString(Tiger);
  }

  public resetSvg() {
    this.setSvgElement(this.originalSvgString);
  }

  public setSvgElement(str: string) {
    this.originalSvgString = str;
    const parsedSvg = this.parser.parseFromString(
      str,
      "image/svg+xml",
    ).documentElement;
    this.svgElement?.value.firstChild?.remove();
    this.panZoom?.reset();
    const svg = this.svgElement?.value.appendChild(parsedSvg);
    if (svg) {
      svg.setAttribute("style", "width: 100%; height: 100%;");
      this.originalSvgNode = svg.cloneNode(true);
    }
  }

  public async loadFromString(svgString: string) {
    let string = svgString;
    if (this.isSVGUrl(string)) {
      string = await this.loadSvgFromUrl(string);
    }
    this.setSvgElement(string);
  }

  public async loadSvgFromUrl(url: string) {
    try {
      this.setSvgElement(Loading);
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");

      if (!contentType || !contentType.includes("image/svg+xml")) {
        throw new Error("The fetched content is not an SVG");
      }
      return await response.text();
    } catch (error) {
      alert(`Error fetching SVG: \n\n ${error}`);
      throw error;
    }
  }

  private isSVGUrl(url: string) {
    try {
      const parsedUrl = new URL(url);

      if (!["http:", "https:"].includes(parsedUrl.protocol)) {
        return false;
      }

      return /\.svg$/i.test(parsedUrl.pathname);
    } catch (error) {
      return false;
    }
  }

  public corruptSvg() {
    if (this.disableCorrupt) return;
    const svgInstance = this.svgElement?.value.querySelector("svg");
    if (!svgInstance) return;

    const svgPaths = svgInstance.querySelectorAll("path");
    const originalSvgPaths = (
      this.originalSvgNode as HTMLElement
    ).querySelectorAll("path");

    const pathsLength = Math.min(svgPaths.length, originalSvgPaths.length);
    const currentFunction = this.currentCorruptionMode.function;

    for (let i = 0; i < pathsLength; i++) {
      const originalPathData = originalSvgPaths[i].getAttribute("d");
      if (!originalPathData) continue;

      const newPathData = currentFunction(
        originalPathData,
        this.targetValuesRegexp,
        this.replaceValue,
        svgPaths[i],
      );
      svgPaths[i].setAttribute("d", newPathData);
    }
  }

  public setTargetValues(values: boolean[]) {
    this.targetValuesArray = [];
    for (const [number, value] of values.entries()) {
      if (value) {
        this.targetValuesArray.push(number);
      }
    }
    if (this.targetValuesArray.length === 0) this.resetSvg();
    this.targetValuesRegexp = new RegExp(
      this.targetValuesArray.join("|"),
      "gi",
    );
  }

  public setReplaceValue(value: number) {
    this.replaceValue = String(value);
  }

  public setCorruptionMode(modeId: string) {
    this.corruptionModes.value.find((mode) => {
      mode.active = mode.id === modeId;
    });
  }

  public async exportSvgToPng(): Promise<void> {
    const svgElement = this.svgElement?.value.querySelector("svg");
    if (!svgElement) return;

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);

    const svgBlob = new Blob([svgData], {
      type: "image/svg+xml;charset=utf-8",
    });

    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      canvas.width = svgElement.clientWidth;
      canvas.height = svgElement.clientHeight;

      context.drawImage(img, 0, 0);

      URL.revokeObjectURL(url);

      canvas.toBlob((blob) => {
        if (blob) {
          const a = document.createElement("a");
          a.href = URL.createObjectURL(blob);
          a.download = `corrupted.png`;
          a.click();

          URL.revokeObjectURL(a.href);
        }
      }, "image/png");
    };

    img.src = url;
  }
}

export default new SVGService();
