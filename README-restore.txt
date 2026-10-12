iConstruction — restore the reference photos

The nine gallery thumbnails in this package were cropped from the reference screenshot you provided. They match the gallery order and preserve the original section title/copy. Since they were extracted from a screenshot, their resolution is limited by that screenshot; they are not the original camera/source files.

1. Extract this ZIP into the project root (the folder containing package.json), allowing it to overwrite src/components/Projects.tsx and add files under public/assets/projects/.
2. Open PowerShell in that same project folder and run:
   .\restore-photo-paths.ps1
3. Then run:
   npm run build
4. If the build succeeds, commit and push the changes to GitHub so Vercel redeploys.

The script only changes the About image path and restores the existing Hero background URL. It does not change the layout or general styling.
