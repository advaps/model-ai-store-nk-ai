// Local image mapping for all 50 TFLite models
export const localImageMapping = {
  // Indoor Models
  "MediaPipe FaceDetector": "./assets/face-detection-ai.jpg",
  "Multi-factor Access System": "./assets/multifactor-access-fixed.jpg",
  "SSD Lite MobileNet-V1 Quantized (COCO)": "./assets/object-detection-coco.jpg",
  "DoorOpenDetection TFLite": "./assets/dooropendetection-tflite.jpg",
  "Custom Object Detector (Model Maker)": "./assets/package-delivery-detection.jpg",
  "Fall Detection Model": "./assets/fall-detection-healthcare.jpg",
  "Heart-attack/Abnormal Motion Alert": "./assets/heart-attack-detection.jpg",
  "Sleep Pattern Monitoring": "./assets/sleep-pattern-monitoring.jpg",
  "Cry Detection": "./assets/baby-cry-detection.jpg",
  "Sudden Collapse Detection": "./assets/sudden-collapse-detection.jpg",
  "Fire Detection CNN": "./assets/fire-detection-cnn.jpg",
  "Gas Leakage Detection": "./assets/gas-leak-detection-fixed.jpg",
  "Stove/Induction Left-on Detection": "./assets/stoveinduction-lefton-detection.jpg",
  "Short-circuit/Sparking Detection": "./assets/shortcircuitsparking-detection.jpg",
  "Overheating Appliance Detection": "./assets/overheating-appliance-detection.jpg",
  "Child Unattended Detection": "./assets/child-unattended-detection.jpg",
  "Pet Activity Monitoring": "./assets/pet-monitoring-fixed.jpg",
  "Elderly Wandering Detection": "./assets/elderly-wandering-detection.jpg",
  "Anomaly Detection TFLite": "./assets/anomaly-detection-tflite.jpg",
  "Smart Occupancy Monitoring": "./assets/occupancy-monitoring-fixed.jpg",
  "Desk Occupancy Tracking": "./assets/desk-occupancy-tracking.jpg",
  "Meeting Room Utilization Monitoring": "./assets/meeting-room-utilization-monitoring.jpg",
  "People Counting for Co-working Spaces": "./assets/people-counting-for-coworking-spaces.jpg",
  "Employee Posture/Focus Analysis": "./assets/employee-posturefocus-analysis.jpg",
  "Safety Gear Detection": "./assets/ppe-safety-detection.jpg",
  
  // Outdoor Models
  "Intrusion Detection (Perimeter Breach)": "./assets/perimeter-security.jpg",
  "Weapon Detection": "./assets/weapon-detection-security.jpg",
  "Suspicious Loitering Alert": "./assets/suspicious-loitering-alert.jpg",
  "Abandoned Object Detection": "./assets/abandoned-object-detection.jpg",
  "Crowd Aggression Detection": "./assets/crowd-aggression-detection.jpg",
  "ANPR (Automatic Number Plate Recognition)": "./assets/vehicle-detection-traffic.jpg",
  "Speeding Vehicle Detection": "./assets/speeding-vehicle-detection.jpg",
  "Wrong-way Driving Detection": "./assets/wrongway-driving-detection.jpg",
  "Parking Space Occupancy Detection": "./assets/parking-space-occupancy-detection.jpg",
  "Vehicle Type Classification": "./assets/vehicle-type-classification.jpg",
  "Gunshot Detection": "./assets/gunshot-acoustic-detection.jpg",
  "Glass-breaking Sound Detection": "./assets/glassbreaking-sound-detection.jpg",
  "Firework/Explosion Detection": "./assets/fireworkexplosion-detection.jpg",
  "Crowd Density Monitoring": "./assets/crowd-density-monitoring.jpg",
  "Public Protest/Rally Monitoring": "./assets/public-protestrally-monitoring.jpg",
  "PPE Compliance Detection": "./assets/ppe-safety-detection.jpg",
  "Unsafe Worker Behavior Detection": "./assets/unsafe-worker-behavior-detection.jpg",
  "Forklift/Machine Collision Risk Alerts": "./assets/forkliftmachine-collision-risk-alerts.jpg",
  "Worker Fatigue Monitoring": "./assets/worker-fatigue-fixed.jpg",
  "Smoke/Fire at Construction Site": "./assets/smokefire-at-construction-site.jpg",
  "Garbage Overflow Detection": "./assets/garbage-overflow-detection.jpg",
  "Waterlogging/Flood Detection": "./assets/environmental-monitoring.jpg",
  "Wild Animal Intrusion Detection": "./assets/wild-animal-intrusion-detection.jpg",
  "Streetlight Outage Detection": "./assets/streetlight-outage-detection.jpg",
  "Weather Anomaly Detection": "./assets/environmental-monitoring.jpg"
};

// Function to get local image for a model
export const getLocalModelImage = (modelName) => {
  return localImageMapping[modelName] || "./assets/hero-ai.jpg"; // Fallback to hero image
};
