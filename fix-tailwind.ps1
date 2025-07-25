echo "Fixing Tailwind CSS version compatibility..."
npm uninstall tailwindcss @tailwindcss/postcss
npm install tailwindcss@3.4.3
echo "Tailwind CSS downgraded to stable version 3.4.3"
echo "Now you can run: npm start"
