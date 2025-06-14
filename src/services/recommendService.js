window.recommendService = {
  recommend(values) {
    return new Promise(resolve => {
      const results = [1, 2, 3].map(num => ({
        name: `${values.flavor} Drink ${num}`,
        score: Math.round(Math.random() * 100),
        recipe: 'Example ingredients',
        flavor: values.flavor,
        strength: values.strength,
        analysis: 'This drink matches your vibe.',
        history: 'A classic choice loved by many.',
        funFact: 'Invented in a far away land.'
      }));
      resolve(results);
    });
  }
};
