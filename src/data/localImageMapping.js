// Import all the generated images
import faceDetectionAi from "@/assets/face-detection-ai.jpg";
import multifactorAccessFixed from "@/assets/multifactor-access-fixed.jpg";
import objectDetectionCoco from "@/assets/object-detection-coco.jpg";
import doorOpenDetection from "@/assets/dooropendetection-tflite.jpg";
import packageDeliveryDetection from "@/assets/package-delivery-detection.jpg";
import fallDetectionHealthcare from "@/assets/fall-detection-healthcare.jpg";
import heartAttackDetection from "@/assets/heart-attack-detection.jpg";
import sleepPatternMonitoring from "@/assets/sleep-pattern-monitoring.jpg";
import babyCryDetection from "@/assets/baby-cry-detection.jpg";
import suddenCollapseDetection from "@/assets/sudden-collapse-detection.jpg";
import gasLeakDetectionFixed from "@/assets/gas-leak-detection-fixed.jpg";
import petMonitoringFixed from "@/assets/pet-monitoring-fixed.jpg";
import occupancyMonitoringFixed from "@/assets/occupancy-monitoring-fixed.jpg";
import safetyGearDetectionUnique from "@/assets/safety-gear-detection-unique.jpg";
import perimeterSecurity from "@/assets/perimeter-security.jpg";
import weaponDetectionSecurity from "@/assets/weapon-detection-security.jpg";
import abandonedObjectDetection from "@/assets/abandoned-object-detection.jpg";
import vehicleDetectionTraffic from "@/assets/vehicle-detection-traffic.jpg";
import speedingVehicleDetection from "@/assets/speeding-vehicle-detection.jpg";
import wrongWayDrivingDetection from "@/assets/wrongway-driving-detection.jpg";
import vehicleTypeClassification from "@/assets/vehicle-type-classification.jpg";
import gunshotAcousticDetection from "@/assets/gunshot-acoustic-detection.jpg";
import workerFatigueFixed from "@/assets/worker-fatigue-fixed.jpg";
import waterloggingFloodDetectionUnique from "@/assets/waterlogging-flood-detection-unique.jpg";
import wildAnimalIntrusion from "@/assets/wild-animal-intrusion-detection.jpg";
import weatherAnomalyDetectionUnique from "@/assets/weather-anomaly-detection-unique.jpg";
import heroAi from "@/assets/hero-ai.jpg";

// Import video files
import mediapipeDemo from "@/assets/mediapipe_demo.mp4";
import numberPlateRecognitionGif from "@/assets/number_plate_recognition.gif";

// Import scenario images - converted from PNG to JPEG
import doorOpenDetect from "@/assets/door-open-detect.jpg";
import fireDetect from "@/assets/fire-detect.jpg";
import stoveInduction from "@/assets/stove-induction.jpg";
import shortCircuit from "@/assets/short-circuit.jpg";
import overheatingApp from "@/assets/overheating-app.jpg";
import childUnattended from "@/assets/child-unattended.jpg";
import elderlyWandering from "@/assets/elderly-wandering.jpg";
import anomalyDetection from "@/assets/anomaly-detection.jpg";
import deskOccupancy from "@/assets/desk-occupancy.jpg";
import meetingRoomUtilization from "@/assets/meeting-room-utilization.jpg";
import peopleCounting from "@/assets/people-counting.jpg";
import employeePosture from "@/assets/employee-posture.jpg";
import suspiciousBehavior from "@/assets/suspicious-behavior.jpg";
import crowdAggressionDetection from "@/assets/crowd-aggression-detection.jpg";
import parkingSpaceOccupancy from "@/assets/parking-space-occupancy.jpg";
import glassBreakingSound from "@/assets/glass-breaking-sound.jpg";
import fireworkExplosion from "@/assets/firework-explosion.jpg";
import crowdDensity from "@/assets/crowd-density.jpg";
import publicProtest from "@/assets/public-protest.jpg";
import unsafeWorker from "@/assets/unsafe-worker.jpg";
import forkliftMachineCollision from "@/assets/forklift-machine-collision.jpg";
import smokeFireDetection from "@/assets/smoke-fire-detection.jpg";
import garbageOverflow from "@/assets/garbage-overflow.jpg";
import streetlightOutageDetection from "@/assets/streetlight-outage-detection.jpg";

// Local image mapping for all 50 TFLite models
export const localImageMapping = {
  // Indoor Models
  "MediaPipe FaceDetector": faceDetectionAi,
  "Multi-factor Access System": multifactorAccessFixed,
  "SSD Lite MobileNet-V1 Quantized (COCO)": objectDetectionCoco,
  "DoorOpenDetection TFLite": doorOpenDetection,
  "Custom Object Detector (Model Maker)": packageDeliveryDetection,
  "Fall Detection Model": fallDetectionHealthcare,
  "Heart-attack/Abnormal Motion Alert": heartAttackDetection,
  "Sleep Pattern Monitoring": sleepPatternMonitoring,
  "Cry Detection": babyCryDetection,
  "Sudden Collapse Detection": suddenCollapseDetection,
  "Fire Detection CNN": fireDetect,
  "Gas Leakage Detection": gasLeakDetectionFixed,
  "Stove/Induction Left-on Detection": stoveInduction,
  "Short-circuit/Sparking Detection": shortCircuit,
  "Overheating Appliance Detection": overheatingApp,
  "Child Unattended Detection": childUnattended,
  "Pet Activity Monitoring": petMonitoringFixed,
  "Elderly Wandering Detection": elderlyWandering,
  "Anomaly Detection TFLite": anomalyDetection,
  "Smart Occupancy Monitoring": occupancyMonitoringFixed,
  "Desk Occupancy Tracking": deskOccupancy,
  "Meeting Room Utilization Monitoring": meetingRoomUtilization,
  "People Counting for Co-working Spaces": peopleCounting,
  "Employee Posture/Focus Analysis": employeePosture,
  "Safety Gear Detection": safetyGearDetectionUnique,
  
  // Outdoor Models
  "Intrusion Detection (Perimeter Breach)": perimeterSecurity,
  "Weapon Detection": weaponDetectionSecurity,
  "Suspicious Loitering Alert": suspiciousBehavior,
  "Abandoned Object Detection": abandonedObjectDetection,
  "Crowd Aggression Detection": crowdAggressionDetection,
  "ANPR (Automatic Number Plate Recognition)": vehicleDetectionTraffic,
  "Speeding Vehicle Detection": speedingVehicleDetection,
  "Wrong-way Driving Detection": wrongWayDrivingDetection,
  "Parking Space Occupancy Detection": parkingSpaceOccupancy,
  "Vehicle Type Classification": vehicleTypeClassification,
  "Gunshot Detection": gunshotAcousticDetection,
  "Glass-breaking Sound Detection": glassBreakingSound,
  "Firework/Explosion Detection": fireworkExplosion,
  "Crowd Density Monitoring": crowdDensity,
  "Public Protest/Rally Monitoring": publicProtest,
  "PPE Compliance Detection": safetyGearDetectionUnique, // Using safety gear detection image
  "Unsafe Worker Behavior Detection": unsafeWorker, // Using unsafe worker image
  "Forklift/Machine Collision Risk Alerts": forkliftMachineCollision,
  "Worker Fatigue Monitoring": workerFatigueFixed,
  "Smoke/Fire at Construction Site": smokeFireDetection, // Using smoke fire detection image
  "Garbage Overflow Detection": garbageOverflow,
  "Waterlogging/Flood Detection": waterloggingFloodDetectionUnique,
  "Wild Animal Intrusion Detection": wildAnimalIntrusion,
  "Streetlight Outage Detection": streetlightOutageDetection,
  "Weather Anomaly Detection": weatherAnomalyDetectionUnique
};

// Function to get local image for a model
export const getLocalModelImage = (modelName) => {
  return localImageMapping[modelName] || heroAi; // Fallback to hero image
};

// Local video mapping for demo videos
export const localVideoMapping = {
  "MediaPipe FaceDetector": mediapipeDemo,
  "ANPR (Automatic Number Plate Recognition)": numberPlateRecognitionGif,
  // Add more video mappings as needed
};

// Function to get local video for a model
export const getLocalModelVideo = (modelName) => {
  return localVideoMapping[modelName] || null;
};
