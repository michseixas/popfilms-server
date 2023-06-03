function welcomeEmail(username) {
    return `<body>
    <div class="container">
    <h1>Thank You for registering to Popfilms!</h1>
    <p>Hello, ${username}</p>
    <p>Thank you for signing up to Popfilms! As a part of our community, you are joining a group of avid movie enthusiasts who believe in the magic of cinema.</p>
    <p>At Popfilms, we provide more than just a social movie database. We strive to inspire and support you on your cinematic journey, whether you're a seasoned film buff or a newcomer to the world of movies.</p>
    <p>By registering, you'll receive regular updates filled with movie recommendations, behind-the-scenes insights, film analyses, and exclusive content from industry experts. We encourage you to engage with us and the community by sharing your thoughts, leaving reviews, and connecting with like-minded individuals.</p>
    <p>Thank you for being a part of our community. We can't wait to help you discover new films, explore different genres, and deepen your love for the silver screen.</p>
    <p>Happy movie watching!</p>
    <p><strong>Mich, Erika & Toni</strong><br>Popfilms Team</p>
  </div>
    </body>`;
  }
  
  module.exports = {
    welcomeEmail,
  }