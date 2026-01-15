import { NgClass } from "@angular/common";
import { Component, computed, inject, OnInit } from "@angular/core";
import { InfoBlockPublic } from "@shared/models/info-block.model";
import { InfoBlockChunk, markdownParser } from "@shared/utils/markdown-parser";
import { InfoBlockService } from "app/data-access/public/info-block/info-block.service";

// TYPES
type InfoBlockPublicParsed = InfoBlockPublic & {
  chunks: InfoBlockChunk[];
};

@Component({
  selector: "app-info-block",
  imports: [NgClass],
  templateUrl: "./info-block.html",
})
export class InfoBlock implements OnInit {
  readonly infoBlockService = inject(InfoBlockService);

  ngOnInit(): void {
    this.infoBlockService.loadInfoBlocks();
  }

  parsedInfoBlocks = computed<InfoBlockPublicParsed[]>(() => {
    const blocks = this.infoBlockService.infoBlocks();

    return blocks.map((block) => ({
      ...block,
      chunks: markdownParser(block.content),
    }));
  });
}
