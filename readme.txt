## Start With Angular 2 ##

npm install -g typescript
npm install -g typings
Add angular 2 seed folder as starting point to project
npm install

package.json - "start": "concurrent \"npm run tsc:w\" \"npm run lite\" ", makes typescript run in watch mode and run the lite mode of app in chrome.

npm start; -> run the lite browser

4 Building Blocks - Components, Directives, Services and Routes

##Fundamental steps##
1. Create a component
2. Set the properties
3. Use interpolation {{}}
4. Create a service
5. Use dependency injection

## Displaying_Data_and_Handling_Events (Property, class, style, event, two way binding) ##
Interpolation {{}} - is used to display properties of a component in the view
Angular translates interpolations into property bindings
Out of [attr] and bind-attr use one that is consistent. (say [])
out of [] and {{}} - use {{}} for rendering text and for attributes use []

for binding events use (event) or on-event - preferred - (event)

<input type="text" [value]="inputvalue" (input)="title4 = $event.target.value">
<input type="text" [(ngModel)]="title4"> shortcut - bind property and event with ngModel directive
<input type="text" bindon-ngModel="title4"> - bind property and event with ngModel directive

Angular does not have two way binding - it is just property and event binding. Angular uses flux structure which only supports one way binding

Always try to keep the logic in component - good for unit testing

## Template driven forms ##
Less code but limited validation also

Module driven forms
More code and control over validation also