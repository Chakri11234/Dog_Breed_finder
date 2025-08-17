# Dog_Breed_finder
# 🐶 Dog Breed Finder

A simple and interactive web application that allows users to search for dog breeds and get detailed information, including images, height, weight, lifespan, and temperament.  

## 🌟 Features
- Search for any dog breed by name (e.g., Husky, Pug, Labrador).  
- Displays breed details:
  - Height  
  - Weight  
  - Lifespan  
  - Temperament  
- Shows multiple images of the breed (if available).  
- User-friendly error messages for invalid or missing input.  

## 💻 Technologies Used
- **HTML5** – Structure of the web page  
- **CSS3** – Styling and layout (in `style.css`)  
- **JavaScript (ES6)** – Fetching and displaying data dynamically  
- **The Dog API** – Public API for dog breed data and images  

## ⚙️ How to Use
1. Clone or download this repository.  
2. Open `index.html` in your web browser.  
3. Enter a dog breed name in the input box.  
4. Click the **Search** button to view breed information and images.  

## 📝 Example
1. Enter `Husky` and click **Search**.  
2. The page will display:  
   - Height: 50–60 cm  
   - Weight: 20–27 kg  
   - Lifespan: 12–15 years  
   - Temperament: Friendly, Alert, Intelligent  
   - Images of Huskies  

## 🚨 Error Handling
- If no breed name is entered:  
  > Please enter a breed name.  
- If the breed is not found:  
  > 🐶 Breed not found. Try another!  
- If API fetch fails:  
  > Displays the relevant error message  

## 📂 Project Structure
Dog-Breed-Finder/
├── index.html # Main HTML file
├── style.css # Styling for the page
└── script.js # JavaScript logic for fetching and displaying breed info




## 🔗 API Reference
- [The Dog API Documentation](https://thedogapi.com/)  

## 🎯 Future Enhancements
- Add autocomplete suggestions for dog breeds.  
- Include a filter by size, temperament, or lifespan.  
- Make the design fully responsive for mobile devices.
