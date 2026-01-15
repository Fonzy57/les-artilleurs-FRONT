// ANGULAR
import { Component, computed, inject, OnInit } from "@angular/core";
import { NgClass } from "@angular/common";

// SERVICE
import { InfoBlockService } from "app/data-access/public/info-block/info-block.service";

// COMPONENTS
import { InfoBlockSkeleton } from "@shared/ui/skeleton/info-block-skeleton/info-block-skeleton";

// UTILS
import { InfoBlockChunk, markdownParser } from "@shared/utils/markdown-parser";

// MODELS
import { InfoBlockPublic } from "@shared/models/info-block.model";

// TYPES
type InfoBlockPublicParsed = InfoBlockPublic & {
  chunks: InfoBlockChunk[];
};

@Component({
  standalone: true,
  selector: "app-website-info-block",
  imports: [NgClass, InfoBlockSkeleton],
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
