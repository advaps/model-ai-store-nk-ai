// Script to search for actual TFLite files in PINTO model zoo
import https from 'https';

async function makeRequest(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function searchForTFLiteFiles(path = '') {
  try {
    const url = `https://api.github.com/repos/PINTO0309/PINTO_model_zoo/contents/${path}`;
    const contents = await makeRequest(url);
    
    const tfliteFiles = [];
    
    for (const item of contents) {
      if (item.type === 'file' && item.name.endsWith('.tflite')) {
        tfliteFiles.push({
          path: item.path,
          name: item.name,
          size: item.size,
          download_url: item.download_url
        });
      } else if (item.type === 'dir') {
        // Recursively search subdirectories (but limit depth to avoid infinite recursion)
        if (path.split('/').length < 3) {
          const subPath = path ? `${path}/${item.name}` : item.name;
          const subTFLiteFiles = await searchForTFLiteFiles(subPath);
          tfliteFiles.push(...subTFLiteFiles);
        }
      }
    }
    
    return tfliteFiles;
  } catch (error) {
    console.error(`Error searching ${path}:`, error.message);
    return [];
  }
}

async function main() {
  console.log('🔍 Searching for TFLite files in PINTO model zoo...\n');
  
  const tfliteFiles = await searchForTFLiteFiles();
  
  console.log(`📊 Found ${tfliteFiles.length} TFLite files:\n`);
  
  if (tfliteFiles.length > 0) {
    tfliteFiles.forEach((file, index) => {
      console.log(`${index + 1}. ${file.path}`);
      console.log(`   Size: ${Math.round(file.size / 1024)}KB`);
      console.log(`   Download: ${file.download_url}`);
      console.log('');
    });
  } else {
    console.log('❌ No TFLite files found directly in the repository.');
    console.log('   The PINTO model zoo typically provides scripts and URLs to download models from other sources.');
  }
  
  // Group by directory
  const byDirectory = {};
  tfliteFiles.forEach(file => {
    const dir = file.path.split('/').slice(0, -1).join('/');
    if (!byDirectory[dir]) byDirectory[dir] = [];
    byDirectory[dir].push(file);
  });
  
  console.log('📁 Grouped by directory:');
  Object.keys(byDirectory).forEach(dir => {
    console.log(`\n${dir}:`);
    byDirectory[dir].forEach(file => {
      console.log(`  - ${file.name} (${Math.round(file.size / 1024)}KB)`);
    });
  });
}

main().catch(console.error);
