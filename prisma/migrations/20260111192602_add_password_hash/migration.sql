-- AlterTable: Add passwordHash column
-- Step 1: Add column as nullable first
ALTER TABLE "User" ADD COLUMN "passwordHash" TEXT;

-- Step 2: Set a placeholder hash for existing users (they will need to reset password)
UPDATE "User" SET "passwordHash" = '$2b$10$placeholder.hash.for.existing.users' WHERE "passwordHash" IS NULL;

-- Step 3: Make the column required
ALTER TABLE "User" ALTER COLUMN "passwordHash" SET NOT NULL;
