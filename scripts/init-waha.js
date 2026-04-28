'use strict';

// Minimal init script placeholder used by Docker image build.
// Keeps compatibility with Dockerfile COPY and init wrapper creation.

async function main() {
  // No-op. Extend if you need pre-start initialization in the container.
}

main().then(() => process.exit(0)).catch((err) => {
  console.error(err);
  process.exit(1);
});
