// Script to check which models have TFLite files in PINTO model zoo
const modelPaths = [
  "006_selfie_segmentation",
  "hand_recrop", 
  "age_gender",
  "meet_segmentation",
  "retinaface",
  "003_posenet",
  "116_DroNet",
  "gaze_estimation",
  "368_C2PNet",
  "midas_v2",
  "123_YOLOR",
  "103_EfficientDet_lite",
  "073_RetinaNet",
  "movenet"
];

async function checkModelForTFLite(modelPath) {
  try {
    const response = await fetch(`https://api.github.com/repos/PINTO0309/PINTO_model_zoo/contents/${modelPath}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return { modelPath, hasTFLite: false, error: 'Directory not found' };
      }
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const files = await response.json();
    const tfliteFiles = files.filter(file => 
      file.type === 'file' && file.name.endsWith('.tflite')
    );
    
    return {
      modelPath,
      hasTFLite: tfliteFiles.length > 0,
      tfliteCount: tfliteFiles.length,
      tfliteFiles: tfliteFiles.map(f => f.name),
      totalFiles: files.length
    };
  } catch (error) {
    return { modelPath, hasTFLite: false, error: error.message };
  }
}

async function checkAllModels() {
  console.log('🔍 Checking TFLite availability in PINTO model zoo...\n');
  
  const results = [];
  
  for (const modelPath of modelPaths) {
    console.log(`Checking: ${modelPath}...`);
    const result = await checkModelForTFLite(modelPath);
    results.push(result);
    
    if (result.hasTFLite) {
      console.log(`✅ ${modelPath}: ${result.tfliteCount} TFLite files found`);
      console.log(`   Files: ${result.tfliteFiles.join(', ')}`);
    } else {
      console.log(`❌ ${modelPath}: No TFLite files (${result.error || 'No .tflite files'})`);
    }
    console.log('');
    
    // Add a small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  // Summary
  const availableModels = results.filter(r => r.hasTFLite);
  const unavailableModels = results.filter(r => !r.hasTFLite);
  
  console.log('📊 SUMMARY:');
  console.log(`✅ Models with TFLite files: ${availableModels.length}/${modelPaths.length}`);
  console.log(`❌ Models without TFLite files: ${unavailableModels.length}/${modelPaths.length}`);
  console.log('');
  
  console.log('✅ AVAILABLE MODELS:');
  availableModels.forEach(model => {
    console.log(`   - ${model.modelPath} (${model.tfliteCount} files)`);
  });
  
  console.log('\n❌ UNAVAILABLE MODELS:');
  unavailableModels.forEach(model => {
    console.log(`   - ${model.modelPath} (${model.error})`);
  });
  
  return results;
}

// Run the check
checkAllModels().catch(console.error);
