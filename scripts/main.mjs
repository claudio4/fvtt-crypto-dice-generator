export const MODULE_ID = "crypto-dice-generator";
const FUNCTION_TO_OVERRIDE = "CONFIG.Dice.randomUniform";

/**
 * Generate a random number between 0 and 1.
 * @return {number} A random number between 0 and 1.
 */
function random() {
  const a32 = new Uint32Array(1);
  window.crypto.getRandomValues(a32);
  // We divide the random number by the maximum value of a Uint32 (2**32) to get a value from 0 to 1.
  return a32[0] / 4294967296;
}

/**
 * Register the override for the random number generator.
 */
function register() {
  libWrapper.register(MODULE_ID, FUNCTION_TO_OVERRIDE, random, "OVERRIDE");
}

Hooks.once("init", async () => {
  await game.settings.register(MODULE_ID, "enabled", {
    name: "Enable Crypto Dice Generator",
    hint: "Use the browser's crypto API to generate random numbers.",
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
    onChange: (value) => {
      if (value) {
        register();
      } else {
        libWrapper.unregister(MODULE_ID, FUNCTION_TO_OVERRIDE);
      }
    },
  });
});

Hooks.on("ready", () => {
  if (game.settings.get(MODULE_ID, "enabled")) register();
});
