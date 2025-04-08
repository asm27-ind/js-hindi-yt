# js-hindi-yt
A code repo for learning Java Script
## **History of JavaScript**  
JavaScript (JS) was created by **Brendan Eich** in **1995** while he was working at Netscape Communications. It was originally called **Mocha**, then renamed **LiveScript**, and finally **JavaScript**.  

### **Key Milestones in JavaScript's History**  
1. **1995** – Brendan Eich develops JavaScript in **10 days** for Netscape Navigator 2.  
2. **1996** – Microsoft creates **JScript**, a variant of JavaScript, for Internet Explorer 3.  
3. **1997** – JavaScript becomes an official standard as **ECMAScript (ES1)** under **ECMA International**.  
4. **2009** – **ES5** introduces features like `JSON`, `strict mode`, and improved array methods.  
5. **2015** – **ES6 (ECMAScript 2015)** brings **let, const, arrow functions, classes, and promises**.  
6. **2017-Present** – Features like async/await, optional chaining, and new APIs improve JavaScript for modern applications.  

Today, JavaScript is the **most popular** programming language for web development, used both on the client-side and server-side (via Node.js).  

---

## **History of Search Engines**  
Search engines help users find web pages on the internet. They have evolved significantly since the early days of the web.  

### **Key Milestones in Search Engine History**  
1. **1990 – Archie:** The first search engine, **Archie**, indexed FTP files but did not provide text search.  
2. **1993 – ALIWEB:** The first web-based search engine, created by **Martijn Koster**.  
3. **1994 – Yahoo! Directory:** A manually curated directory rather than a true search engine.  
4. **1996 – Backrub (Google’s Prototype):** **Larry Page and Sergey Brin** developed **Backrub**, later renamed **Google**.  
5. **1998 – Google Launched:** Google introduced **PageRank**, revolutionizing web search.  
6. **2000 – Google AdWords:** The introduction of advertising in search results.  
7. **2004 – Web 2.0 & Personalization:** Search engines started personalizing search results.  
8. **2011 – Google Panda Update:** Improved search quality by penalizing low-quality websites.  
9. **2015 – Mobile-first Indexing:** Google started prioritizing mobile-friendly sites.  
10. **2023-Present – AI Search & Generative AI:** Search engines integrate AI (like **Google Gemini, Microsoft Copilot**) to provide more interactive search experiences.  

### **What is an API?**
API (Application Programming Interface) is a set of rules that allows one software application to interact with another. It defines how requests and responses should be made and processed.

In simple terms, an API acts as a **waiter** in a restaurant:
- You (the client) give your order (request) to the waiter (API).
- The waiter takes it to the kitchen (server).
- The kitchen prepares the food (processes the request).
- The waiter brings the food back to you (response).

---

### **Formats of API Responses**
APIs typically return data in **structured formats**. The most common ones are:
1. **JSON (JavaScript Object Notation) – Most widely used**
2. **XML (Extensible Markup Language) – Used in older systems**
3. **Plain Text or HTML – Sometimes used in web APIs**

---

### **Real-Life Example of an API**
#### **1. Weather API**
- You open a weather app and check today's temperature.
- The app sends a request to a weather API like OpenWeather.
- The API responds with the temperature in JSON format.
- The app displays the temperature to you.

#### **2. Online Payments (Paytm, Google Pay, UPI)**
- You make a payment using Google Pay.
- Google Pay’s API communicates with your bank’s API.
- Your bank processes the payment and returns a success or failure message.

---

### **What is JSON?**
JSON (JavaScript Object Notation) is a lightweight data format used for APIs. It is easy for humans to read and write, and easy for machines to parse.

#### **Example JSON Response from a Weather API**
```json
{
  "city": "Kolkata",
  "temperature": 32,
  "humidity": 65,
  "description": "Sunny"
}
```

---

### **Relationship Between APIs and JSON**
- APIs **send and receive data** in JSON format because it is lightweight and widely supported.
- JSON allows **structured** and **organized** data transfer.
- It is **language-independent**, meaning APIs in Python, JavaScript, or C++ can all use JSON.

# JavaScript Closures
In JavaScript, a closure is created when a function is defined within another function, allowing the inner function to access variables and parameters of the outer function even after the outer function has finished executing. This is because the inner function maintains a reference to its lexical environment, which includes all the variables in scope at the time of its creation