import Tiger from "../assets/tiger.svg?raw";
import { ref, Ref } from "vue";
import { PanzoomObject } from "@panzoom/panzoom";
import corruptions from "../utils/corruptions.ts";

interface CorruptionMode {
  id: string;
  name: string;
  active: boolean;
  description: string;
  random?: boolean;
  function: (
    pathData: string,
    search: RegExp,
    value: string,
    node: SVGElement,
  ) => string;
}

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

  get currentCorruptionMode() {
    return this.corruptionModes.value.find((mode) => mode.active)!;
  }

  get disableCorrupt() {
    return (
      this.targetValuesArray.length === 0 && !this.currentCorruptionMode.random
    );
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
      this.originalSvgNode = svg.cloneNode(true);
      console.log(this.originalSvgNode);
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
}

export default new SVGService();
