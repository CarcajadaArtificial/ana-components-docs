#### options
The options property is used to set the selectable options. It can be an array of strings where every item will create an option with every item being the name and value of the option `<option value="item">item</option>`. Also, an array of types `{name: string, value: string}` can also be used.

```html
<Select options={[{ name: "A", value: "a" }]} />
```