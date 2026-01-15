// ANGULAR
import { NgClass } from "@angular/common";
import { Component, computed, input } from "@angular/core";

// MODELS
import { InfoBlockAdmin } from "@shared/models/info-block.model";

// UTILS
import { InfoBlockChunk, markdownParser } from "@shared/utils/markdown-parser";

type InfoBlockAdminPreviewParsed = InfoBlockAdmin & {
  chunks: InfoBlockChunk[];
};

@Component({
  standalone: true,
  selector: "app-info-block-preview",
  imports: [NgClass],
  templateUrl: "./info-preview.html",
})
export class InfoPreview {
  infoBlocks = input<InfoBlockAdmin[]>([]);
  loading = input<boolean>(false);
  error = input<boolean>(false);

  parsedInfoBlocks = computed<InfoBlockAdminPreviewParsed[]>(() => {
    const blocks = this.infoBlocks();
    return blocks
      .filter((block) => block.slot !== null)
      .sort((a, b) => a.slot! - b.slot!)
      .map((block) => {
        return {
          ...block,
          chunks: markdownParser(block.content),
        };
      });
  });
}
