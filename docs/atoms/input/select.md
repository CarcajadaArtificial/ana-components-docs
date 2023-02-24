### TextArea
The `<TextArea />` component is used to create a multi-line text input field where users can enter text, such as comments, messages, or articles. It allows for the input of large blocks of text and can be resized using the rows and cols attributes. 

#### `[JSX]` TextArea component
```js
import { Select } from 'ana-components';

export default function () {
	return <Select placeholder="Placeholder" options={["a", "b", "c"]} />;
}
```
#### `[HTML]` Rendered HTML
  ```html
<label>
	<span><!-- Label --></span>
	<select>
		<option value selected hidden>Placeholder</option>
		<option value="a">a</option>
		<option value="b">b</option>
		<option value="c">c</option>
	</select>
</label>
```