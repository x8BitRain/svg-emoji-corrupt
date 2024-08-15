export const importSVG = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".svg";
    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          const svg = event.target?.result as string;
          resolve(svg);
        };
        reader.onerror = (event) => {
          reject(event);
        };
        reader.readAsText(file);
      } else {
        reject("No file selected");
      }
    };
    input.click();
  });
};
