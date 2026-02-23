# Animation loops

Animation loop is a plain vanilla animations made in 2d canvas, using basic amthematical functions and equations.
There are also 3d animations used which are made using three.js.

## Sketches

1. expanding shrinking Webgl 
2. Glowing dots post processing
3. gun and gold
4. Flower power
5. Bowl and cups
6. [2D] Hue random walk using sin and cos function
7. [3d] Ball Waves!
99. [AR] google AR adaptation


## Deploy (GitHub Pages)

1. **Install dependencies** (including the new copy-webpack-plugin):
   ```bash
   npm install
   ```

2. **Build and deploy** to the `gh-pages` branch:
   ```bash
   npm run deploy
   ```
   This runs `npm run build` (production build) then publishes the `dist/` folder to GitHub Pages.

3. **Enable Pages** in the repo:
   - Go to **GitHub → repo → Settings → Pages**.
   - Under **Build and deployment**, set **Source** to **Deploy from a branch**.
   - Choose branch **gh-pages** and folder **/ (root)**. Save.

4. **Site URL**: `https://thapliyalshivam.github.io/webgl_loops/`  
   Sketches: `#1` … `#10`, `#99` (e.g. `https://thapliyalshivam.github.io/webgl_loops/#2`).

**Note:** If you use a different repo name, set `publicPath` in `webpack.config.js` to `'/<your-repo-name>/'`.

---

## Task List

- [x] add colours list
- [x] integrate webpack
- [ ] add the next button and functionality
- [ ] add the title and 












