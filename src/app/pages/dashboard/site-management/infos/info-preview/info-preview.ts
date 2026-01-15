import { NgClass } from "@angular/common";
import { Component, computed, inject, OnInit } from "@angular/core";
import { InfoBlockPublicParsed } from "@layouts/main-layout/ui/sections/info-block/info-block";
import { markdownParser } from "@shared/utils/markdown-parser";
import { InfoBlockService } from "app/data-access/public/info-block/info-block.service";

@Component({
  standalone: true,
  selector: "app-info-block-preview",
  imports: [NgClass],
  templateUrl: "./info-preview.html",
})
export class InfoPreview implements OnInit {
  readonly infoBlockPublicService = inject(InfoBlockService);

  parsedInfoBlocks = computed<InfoBlockPublicParsed[]>(() => {
    const blocks = this.infoBlockPublicService.infoBlocks();

    return blocks.map((block) => ({
      ...block,
      chunks: markdownParser(block.content),
    }));
  });

  ngOnInit(): void {
    this.infoBlockPublicService.loadInfoBlocks();
  }
}
