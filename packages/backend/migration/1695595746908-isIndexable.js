/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

export class isIndexable1695595746908 {
    name = 'isIndexable1695595746908'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "isIndexable" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."isIndexable" IS 'Search indexable.'`);
    }

    async down(queryRunner) {
        await queryRunner.query(`COMMENT ON COLUMN "user"."isIndexable" IS 'Search indexable.'`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isIndexable"`);
    }

}
