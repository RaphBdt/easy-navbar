# Easy Navbar

Package to have a responsive and manageable navbar in less than 3 minutes ⚡️

## How to use?

### Installation

```
npm install @raphy73/easynavbar
```

### Import JS

```js
import { easyNavbar } from '@raphy73/easynavbar';

easyNavbar();
```

### Import CSS

```css
@import 'YOUR_ORIGIN_PATH/node_modules/@raphy73/easynavbar/dist/style.css';
```

### Create a Json file and manage your navbar

You can add your primary color, your logo and manage all the pages. Here is an example:
```json
{
    "color": "#6F9CEB", 
    "logo": "/your-logo.png",
    "pages": [
        {
          "name": "Home",
          "link": "#",
          "openNewTab": false
        },
        {
          "name": "About",
          "link": "#",
          "openNewTab": false
        },
        {
          "name": "Work",
          "link": "#",
          "openNewTab": false
        },
        {
          "name": "Location",
          "link": "https://maps.app.goo.gl/y52F3WjMsjiFwk5b7",
          "openNewTab": true
        }
    ]
}
```

### Finally... Display the navbar in your HTML 👏

```html
<nav id="easyNavbar" data-json="/your-custom-json-file.json"></nav>
```

## How to Contribute?

If you want to contribute code, follow these steps:

1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine.

    ```bash
    git clone https://github.com/your-username/your-project.git
    ```

3. Create a new branch for your changes.

    ```bash
    git checkout -b feature/your-feature
    ```

4. Make your changes and commit them with a clear and concise commit message.

    ```bash
    git commit -m "Add your feature"
    ```

5. Push your changes to your forked repository.

    ```bash
    git push origin feature/your-feature
    ```

6. Open a pull request on the Pull Requests page, providing a detailed description of your changes.

Thank you for contributing to Easy Navbar! 🚀