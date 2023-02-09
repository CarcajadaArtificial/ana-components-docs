## Input

At its minimum, the Input component is equivalent to the input HTMLElement. It is used mainly for form-like interactivity and for allowing users to give complex information to the system. 

The Input component supports any attribute available for the Input HTMLElement and is built using accessible practices by default. For theming it is set to the tertiary background. This way it doesn't blend with the primary and secondary backgrounds without using a border.

#### `[JSX]` Input component
```js
import { Input } from 'ana-components';

export default function () {
	return <Input />;
}
```
#### `[HTML]` Rendered HTML
  ```html
<label>
	<span><!-- Label --></span>
	<input />
</label>
```