// Local image mapping for all 50 TFLite models
export const localImageMapping = {
  // Indoor Models
  "MediaPipe FaceDetector": "./assets/mediapipe-facedetector.jpg",
  "Multi-factor Access System": "./assets/multifactor-access-system.jpg",
  "SSD Lite MobileNet-V1 Quantized (COCO)": "./assets/ssd-lite-mobilenetv1-quantized-coco.jpg",
  "DoorOpenDetection TFLite": "./assets/dooropendetection-tflite.jpg",
  "Custom Object Detector (Model Maker)": "./assets/custom-object-detector-model-maker.jpg",
  "Fall Detection Model": "./assets/fire-detection-cnn.jpg", // Using fire safety image as fallback
  "Heart-attack/Abnormal Motion Alert": "./assets/fire-detection-cnn.jpg", // Using fire safety image as fallback
  "Sleep Pattern Monitoring": "./assets/fire-detection-cnn.jpg", // Using fire safety image as fallback
  "Cry Detection": "./assets/cry-detection.jpg",
  "Sudden Collapse Detection": "./assets/fire-detection-cnn.jpg", // Using fire safety image as fallback
  "Fire Detection CNN": "./assets/fire-detection-cnn.jpg",
  "Gas Leakage Detection": "./assets/gas-leakage-detection.jpg",
  "Stove/Induction Left-on Detection": "./assets/stoveinduction-lefton-detection.jpg",
  "Short-circuit/Sparking Detection": "./assets/shortcircuitsparking-detection.jpg",
  "Overheating Appliance Detection": "./assets/overheating-appliance-detection.jpg",
  "Child Unattended Detection": "./assets/child-unattended-detection.jpg",
  "Pet Activity Monitoring": "./assets/pet-activity-monitoring.jpg",
  "Elderly Wandering Detection": "./assets/fire-detection-cnn.jpg", // Using fire safety image as fallback
  "Anomaly Detection TFLite": "./assets/anomaly-detection-tflite.jpg",
  "Smart Occupancy Monitoring": "./assets/smart-occupancy-monitoring.jpg",
  "Desk Occupancy Tracking": "./assets/desk-occupancy-tracking.jpg",
  "Meeting Room Utilization Monitoring": "./assets/meeting-room-utilization-monitoring.jpg",
  "People Counting for Co-working Spaces": "./assets/people-counting-for-coworking-spaces.jpg",
  "Employee Posture/Focus Analysis": "./assets/employee-posturefocus-analysis.jpg",
  "Safety Gear Detection": "./assets/safety-gear-detection.jpg",
  
  // Outdoor Models
  "Intrusion Detection (Perimeter Breach)": "./assets/intrusion-detection-perimeter-breach.jpg",
  "Weapon Detection": "./assets/weapon-detection.jpg",
  "Suspicious Loitering Alert": "./assets/suspicious-loitering-alert.jpg",
  "Abandoned Object Detection": "./assets/abandoned-object-detection.jpg",
  "Crowd Aggression Detection": "./assets/crowd-aggression-detection.jpg",
  "ANPR (Automatic Number Plate Recognition)": "./assets/anpr-automatic-number-plate-recognition.jpg",
  "Speeding Vehicle Detection": "./assets/speeding-vehicle-detection.jpg",
  "Wrong-way Driving Detection": "./assets/wrongway-driving-detection.jpg",
  "Parking Space Occupancy Detection": "./assets/parking-space-occupancy-detection.jpg",
  "Vehicle Type Classification": "./assets/vehicle-type-classification.jpg",
  "Gunshot Detection": "./assets/gunshot-detection.jpg",
  "Glass-breaking Sound Detection": "./assets/glassbreaking-sound-detection.jpg",
  "Firework/Explosion Detection": "./assets/fireworkexplosion-detection.jpg",
  "Crowd Density Monitoring": "./assets/crowd-density-monitoring.jpg",
  "Public Protest/Rally Monitoring": "./assets/public-protestrally-monitoring.jpg",
  "PPE Compliance Detection": "./assets/ppe-compliance-detection.jpg",
  "Unsafe Worker Behavior Detection": "./assets/unsafe-worker-behavior-detection.jpg",
  "Forklift/Machine Collision Risk Alerts": "./assets/forkliftmachine-collision-risk-alerts.jpg",
  "Worker Fatigue Monitoring": "./assets/worker-fatigue-monitoring.jpg",
  "Smoke/Fire at Construction Site": "./assets/smokefire-at-construction-site.jpg",
  "Garbage Overflow Detection": "./assets/garbage-overflow-detection.jpg",
  "Waterlogging/Flood Detection": "./assets/waterloggingflood-detection.jpg",
  "Wild Animal Intrusion Detection": "./assets/wild-animal-intrusion-detection.jpg",
  "Streetlight Outage Detection": "./assets/streetlight-outage-detection.jpg",
  "Weather Anomaly Detection": "./assets/weather-anomaly-detection.jpg"
};

// Function to get local image for a model
export const getLocalModelImage = (modelName) => {
  return localImageMapping[modelName] || "./assets/hero-ai.jpg"; // Fallback to hero image
};
