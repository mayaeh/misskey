/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

export class movedTo1652878170000 {
	name = 'movedTo1652878170000'

	async up(queryRunner) {
			await queryRunner.query(`ALTER TABLE "user" ADD "movedToUserId" character varying(32)`);
			await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_81126443ddd4dc1291f2e764da7" FOREIGN KEY ("movedToUserId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
	}

	async down(queryRunner) {
			await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_81126443ddd4dc1291f2e764da7"`);
			await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "movedToUserId"`);
	}
}
