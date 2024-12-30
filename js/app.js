document.getElementById('profileImage').addEventListener('click', () => {
    document.getElementById('storiesPage').classList.remove('hidden');
  });
  
  document.getElementById('closeStories').addEventListener('click', () => {
    document.getElementById('storiesPage').classList.add('hidden');
  });
  
  const stories = [
    { id: 1, content: "مرحبًا بكم في موقعي! أنا سعيد جدًا بأنكم هنا، وسأقوم بتحديث المحتوى بشكل مستمر، فابقوا على تواصل! 📚✨" },
    { id: 2, content: "أتمنى أن تجدوا هنا كل ما تحتاجونه لدعم دراستكم. ترقبوا المزيد من المحتوى قريبًا ⏳📖" },
    { id: 3, content: "أسأل الله لكم التوفيق والنجاح 🙏🎓" },
  ];
  
  
  let currentStory = 0;
  
  function updateStory() {
    const storyContent = document.getElementById('storyContent');
    storyContent.innerHTML = `<p>${stories[currentStory].content}</p>`;
  }
  
  document.getElementById('prevStory').addEventListener('click', () => {
    if (currentStory > 0) {
      currentStory--;
      updateStory();
    }
  });
  
  document.getElementById('nextStory').addEventListener('click', () => {
    if (currentStory < stories.length - 1) {
      currentStory++;
      updateStory();
    }
  });
  
  // Initialize first story
  updateStory();