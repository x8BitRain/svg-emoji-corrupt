import Tiger from "../assets/tiger.svg?raw";
import { Ref } from "vue";
import { PanzoomObject } from "@panzoom/panzoom";

class SVGService {
  parser = new DOMParser();
  svgElement: Ref<SVGElement> | null = null;
  panZoom: PanzoomObject | null = null;

  public async init(svg: Ref<SVGElement>, panZoom: PanzoomObject) {
    this.svgElement = svg;
    this.panZoom = panZoom;
    await this.loadFromString(Tiger);
  }

  public setSvgElement(str: string) {
    const parsedSvg = this.parser.parseFromString(
      str,
      "image/svg+xml",
    ).documentElement;
    this.svgElement?.value.firstChild?.remove();
    this.panZoom?.reset();
    this.svgElement?.value.appendChild(parsedSvg);
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
}

export default new SVGService();
