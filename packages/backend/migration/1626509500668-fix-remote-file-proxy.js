/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

export class fixRemoteFileProxy1626509500668 {
    constructor() {
        this.name = 'fixRemoteFileProxy1626509500668';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "meta" DROP COLUMN "proxyRemoteFiles"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "meta" ADD "proxyRemoteFiles" boolean NOT NULL DEFAULT false`);
    }
}

