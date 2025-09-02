// Import all the generated images
import faceDetectionAi from "@/assets/face-detection-ai.jpg";
import multifactorAccessFixed from "@/assets/multifactor-access-fixed.jpg";
import objectDetectionCoco from "@/assets/object-detection-coco.jpg";
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

// Import unique images for each specific model
import doorOpenDetectionUnique from "@/assets/door-open-detection-unique.jpg";
import fireDetectionAiUnique from "@/assets/fire-detection-ai-unique.jpg";
import stoveMonitoringUnique from "@/assets/stove-monitoring-unique.jpg";
import shortCircuitDetectionUnique from "@/assets/short-circuit-detection-unique.jpg";
import overheatingDetectionUnique from "@/assets/overheating-detection-unique.jpg";
import childSafetyMonitoringUnique from "@/assets/child-safety-monitoring-unique.jpg";
import elderlyTrackingUnique from "@/assets/elderly-tracking-unique.jpg";
import anomalyAiDetectionUnique from "@/assets/anomaly-ai-detection-unique.jpg";
import deskTrackingUnique from "@/assets/desk-tracking-unique.jpg";
import meetingRoomAnalyticsUnique from "@/assets/meeting-room-analytics-unique.jpg";
import peopleCounterUnique from "@/assets/people-counter-unique.jpg";
import postureAnalysisUnique from "@/assets/posture-analysis-unique.jpg";
import suspiciousActivityUnique from "@/assets/suspicious-activity-unique.jpg";
import crowdViolenceDetectionUnique from "@/assets/crowd-violence-detection-unique.jpg";
import parkingSensorsUnique from "@/assets/parking-sensors-unique.jpg";
import glassBreakSoundUnique from "@/assets/glass-break-sound-unique.jpg";
import fireworkBlastDetectionUnique from "@/assets/firework-blast-detection-unique.jpg";
import crowdFlowAnalysisUnique from "@/assets/crowd-flow-analysis-unique.jpg";
import protestMonitoringUnique from "@/assets/protest-monitoring-unique.jpg";
import workerSafetyViolationsUnique from "@/assets/worker-safety-violations-unique.jpg";
import forkliftCollisionPreventionUnique from "@/assets/forklift-collision-prevention-unique.jpg";
import industrialSmokeDetectionUnique from "@/assets/industrial-smoke-detection-unique.jpg";
import wasteOverflowDetectionUnique from "@/assets/waste-overflow-detection-unique.jpg";
import streetlightMonitoringUnique from "@/assets/streetlight-monitoring-unique.jpg";

// Local image mapping for all 50 TFLite models - Each model has a unique image
export const localImageMapping = {
  // Indoor Models
  "MediaPipe FaceDetector": faceDetectionAi,
  "Multi-factor Access System": multifactorAccessFixed,
  "SSD Lite MobileNet-V1 Quantized (COCO)": objectDetectionCoco,
  "DoorOpenDetection TFLite": doorOpenDetectionUnique,
  "Custom Object Detector (Model Maker)": packageDeliveryDetection,
  "Fall Detection Model": fallDetectionHealthcare,
  "Heart-attack/Abnormal Motion Alert": heartAttackDetection,
  "Sleep Pattern Monitoring": sleepPatternMonitoring,
  "Cry Detection": babyCryDetection,
  "Sudden Collapse Detection": suddenCollapseDetection,
  "Fire Detection CNN": fireDetectionAiUnique,
  "Gas Leakage Detection": gasLeakDetectionFixed,
  "Stove/Induction Left-on Detection": stoveMonitoringUnique,
  "Short-circuit/Sparking Detection": shortCircuitDetectionUnique,
  "Overheating Appliance Detection": overheatingDetectionUnique,
  "Child Unattended Detection": childSafetyMonitoringUnique,
  "Pet Activity Monitoring": petMonitoringFixed,
  "Elderly Wandering Detection": elderlyTrackingUnique,
  "Anomaly Detection TFLite": anomalyAiDetectionUnique,
  "Smart Occupancy Monitoring": occupancyMonitoringFixed,
  "Desk Occupancy Tracking": deskTrackingUnique,
  "Meeting Room Utilization Monitoring": meetingRoomAnalyticsUnique,
  "People Counting for Co-working Spaces": peopleCounterUnique,
  "Employee Posture/Focus Analysis": postureAnalysisUnique,
  "Safety Gear Detection": safetyGearDetectionUnique,
  
  // Outdoor Models
  "Intrusion Detection (Perimeter Breach)": perimeterSecurity,
  "Weapon Detection": weaponDetectionSecurity,
  "Suspicious Loitering Alert": suspiciousActivityUnique,
  "Abandoned Object Detection": abandonedObjectDetection,
  "Crowd Aggression Detection": crowdViolenceDetectionUnique,
  "ANPR (Automatic Number Plate Recognition)": vehicleDetectionTraffic,
  "Speeding Vehicle Detection": speedingVehicleDetection,
  "Wrong-way Driving Detection": wrongWayDrivingDetection,
  "Parking Space Occupancy Detection": parkingSensorsUnique,
  "Vehicle Type Classification": vehicleTypeClassification,
  "Gunshot Detection": gunshotAcousticDetection,
  "Glass-breaking Sound Detection": glassBreakSoundUnique,
  "Firework/Explosion Detection": fireworkBlastDetectionUnique,
  "Crowd Density Monitoring": crowdFlowAnalysisUnique,
  "Public Protest/Rally Monitoring": protestMonitoringUnique,
  "PPE Compliance Detection": safetyGearDetectionUnique,
  "Unsafe Worker Behavior Detection": workerSafetyViolationsUnique,
  "Forklift/Machine Collision Risk Alerts": forkliftCollisionPreventionUnique,
  "Worker Fatigue Monitoring": workerFatigueFixed,
  "Smoke/Fire at Construction Site": industrialSmokeDetectionUnique,
  "Garbage Overflow Detection": wasteOverflowDetectionUnique,
  "Waterlogging/Flood Detection": waterloggingFloodDetectionUnique,
  "Wild Animal Intrusion Detection": wildAnimalIntrusion,
  "Streetlight Outage Detection": streetlightMonitoringUnique,
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
