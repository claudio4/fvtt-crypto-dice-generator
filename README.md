# Crypto Dice Generator for FoundryVTT

This FoundryVTT module replaces the native random number generator (Mersenne Twister) with the browser's native cryptographic random number generator. The browser's RNG is based on the Web Crypto API, which provides a more secure and unpredictable source of randomness.

## Features

-   **Improved Randomness**: The browser's cryptographic RNG is designed to be more secure and less predictable compared to the Mersenne Twister algorithm used by default in Foundry.
-   **Plug-and-Play**: No complex setup is required. Once installed, the module automatically replaces Foundry's RNG for all random operations.

## Compatibility

⚠️ **Important**: This module is only compatible with FoundryVTT **version 11 or lower**. It will not work with future versions of Foundry as they have transitioned to using a different API for dice rolls in version 12+.

## Installation

1. Go to the "releases" page on this repository.

![](https://user-images.githubusercontent.com/9874071/207355820-7fafd5e4-984f-4209-b311-7aaf7e7c5393.png)

2. Find the latest stable release, copy the link address of the "manifest.json".

![](https://user-images.githubusercontent.com/9874071/207356421-6a4dca9e-6c53-4c78-8f2a-f209d8f7f82f.png)

3. Go to your Foundry instance "Setup" screen and click on the "Add-on Modules" tab.

![](https://user-images.githubusercontent.com/9874071/207356928-5ab088ae-82cb-43a9-930a-89fc52d740bb.png)

4. Click on the "Install module" button.

![](https://user-images.githubusercontent.com/9874071/207357275-b5bf8438-0d63-4c9a-bb9b-b10af6670c2c.png)

5. Paste the link in our clipboard in the "Manifest URL" field at the bottom of the page, then click the "Install" button.

![](https://user-images.githubusercontent.com/9874071/207357907-2b4f76e6-1068-4815-bd22-655349cae93a.png)

## How it Works

The module hooks into Foundry's core random number generator functions and redirects them to use the `crypto.getRandomValues()` method provided by modern web browsers. This method generates numbers random enough to be used by security applications (like TLS), also it is seeded with more entropy based on your OS/hardware entropy sources.

## Advantages of Using Crypto RNG

-   **Higher Entropy**: Unlike the Mersenne Twister, which is deterministic and predictable given a seed, the Web Crypto RNG provides high entropy and is suitable for cryptographic purposes.
-   **Better for Security-Conscious Games**: If your game involves sensitive operations or requires robust randomness (e.g., hidden rolls or secure voting), the cryptographic RNG is a better choice.
-   **Widely Supported**: The Web Crypto API is natively supported in all modern browsers, ensuring broad compatibility.

## Known Issues

-   As this module only works with FoundryVTT version 11 or lower, future updates of Foundry might break compatibility.
-   The module is lightweight but may introduce slight overhead due to the higher security features of the crypto RNG.

## Support

If you encounter any issues or have suggestions, feel free to open an issue in this repository.

Happy rolling!
