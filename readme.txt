npm install -g typescript
npm install -g typings
Add angular 2 seed folder as starting point to project
npm install

package.json - "start": "concurrent \"npm run tsc:w\" \"npm run lite\" ", makes typescript run in watch mode and run the lite mode of app in chrome.

npm start; -> run the lite browser

4 Building Blocks - Components, Directives, Services and Routes

#Fundamental steps
1. Create a component
2. Set the properties
3. Use interpolation {{}}
4. Create a service
5. Use dependency injection