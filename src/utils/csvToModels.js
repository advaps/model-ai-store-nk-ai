// Utility to convert CSV data to model format for the UI
export function csvToModels(csvData) {
  const lines = csvData.trim().split('\n');
  const headers = lines[0].split(',');
  const models = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const values = parseCSVLine(line);
    
    if (values.length >= 5) {
      const model = {
        name: values[0].trim(),
        description: values[1].trim(),
        image: getRandomImage(), // We'll use placeholder images for now
        videoUrl: values[3].trim() || null,
        downloadUrl: values[4].trim() || null,
        rating: getRandomRating(),
        downloads: getRandomDownloads(),
        category: getCategoryFromName(values[0]),
        updated: getRandomUpdated(),
        size: getRandomSize(),
        featured: false,
        detailedDescription: values[1].trim(),
        useCases: getUseCasesFromCategory(getCategoryFromName(values[0])),
        features: getFeaturesFromCategory(getCategoryFromName(values[0])),
        githubUrl: null
      };
      
      models.push(model);
    }
  }

  return models;
}

function parseCSVLine(line) {
  const values = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      values.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  
  values.push(current);
  return values;
}

function getCategoryFromName(name) {
  const lowerName = name.toLowerCase();
  
  if (lowerName.includes('mobilenet') || lowerName.includes('efficientnet') || 
      lowerName.includes('inception') || lowerName.includes('squeezenet') || 
      lowerName.includes('nasnet') || lowerName.includes('classifier')) {
    return 'Classification';
  } else if (lowerName.includes('yolo') || lowerName.includes('ssd') || 
             lowerName.includes('detection') || lowerName.includes('objectron')) {
    return 'Detection';
  } else if (lowerName.includes('pose') || lowerName.includes('landmark')) {
    return 'Pose';
  } else if (lowerName.includes('face') || lowerName.includes('blazeface')) {
    return 'Face';
  } else if (lowerName.includes('hand') || lowerName.includes('gesture')) {
    return 'Hand';
  } else if (lowerName.includes('segmentation') || lowerName.includes('deeplab')) {
    return 'Segmentation';
  } else if (lowerName.includes('depth') || lowerName.includes('style')) {
    return 'Specialized';
  } else {
    return 'General';
  }
}

function getRandomImage() {
  const images = [
    "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    "https://images.unsplash.com/photo-1571741755707-5d25de3b6cb2?w=400&h=300&fit=crop"
  ];
  return images[Math.floor(Math.random() * images.length)];
}

function getRandomRating() {
  return Math.round((Math.random() * 0.5 + 4.0) * 10) / 10; // 4.0 to 4.5
}

function getRandomDownloads() {
  const downloads = ['120K', '250K', '450K', '780K', '1.2M', '890K', '650K', '320K', '540K', '1.1M'];
  return downloads[Math.floor(Math.random() * downloads.length)];
}

function getRandomUpdated() {
  const updates = ['1 day ago', '2 days ago', '3 days ago', '1 week ago', '2 weeks ago'];
  return updates[Math.floor(Math.random() * updates.length)];
}

function getRandomSize() {
  const sizes = ['2.3MB', '45MB', '125MB', '245MB', '66.3MB', '458KB', '28MB', '12MB', '78MB', '89MB'];
  return sizes[Math.floor(Math.random() * sizes.length)];
}

function getUseCasesFromCategory(category) {
  const useCases = {
    'Classification': ['Image classification', 'Object recognition', 'Content filtering', 'Quality control'],
    'Detection': ['Object detection', 'Surveillance', 'Autonomous driving', 'Retail analytics'],
    'Pose': ['Fitness tracking', 'Sports analysis', 'Motion capture', 'Gesture recognition'],
    'Face': ['Face detection', 'Biometric authentication', 'Photo editing', 'Security systems'],
    'Hand': ['Gesture recognition', 'Sign language', 'Touch interfaces', 'AR applications'],
    'Segmentation': ['Background removal', 'Medical imaging', 'Autonomous driving', 'AR/VR'],
    'Specialized': ['Depth estimation', 'Style transfer', '3D reconstruction', 'Creative applications'],
    'General': ['Computer vision', 'AI applications', 'Mobile apps', 'Edge computing']
  };
  
  return useCases[category] || useCases['General'];
}

function getFeaturesFromCategory(category) {
  const features = {
    'Classification': ['High accuracy', 'Fast inference', 'Mobile optimized', 'Lightweight'],
    'Detection': ['Real-time detection', 'Multi-object support', 'High precision', 'Robust performance'],
    'Pose': ['Real-time tracking', 'Multi-person support', 'High accuracy', 'Low latency'],
    'Face': ['Fast detection', 'High accuracy', 'Multi-face support', 'Robust to lighting'],
    'Hand': ['Real-time processing', 'Multi-hand support', 'High precision', 'Gesture ready'],
    'Segmentation': ['Pixel-perfect accuracy', 'Real-time processing', 'High quality output', 'Efficient memory usage'],
    'Specialized': ['Specialized processing', 'High quality results', 'Optimized performance', 'Advanced features'],
    'General': ['Versatile', 'Easy integration', 'Well documented', 'Community supported']
  };
  
  return features[category] || features['General'];
}
