/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";

export class AnimeListReproductionDto {
  @ApiProperty({ type: String, required: true })
  animeId: string;
  @ApiProperty({ type: String, required: true })
  listReproductionId: string;
}