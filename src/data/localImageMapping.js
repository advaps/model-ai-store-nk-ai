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
import fireDetectionCnn from "@/assets/fire-detection-cnn.jpg";
import gasLeakDetectionFixed from "@/assets/gas-leak-detection-fixed.jpg";
import stoveInductionDetection from "@/assets/stoveinduction-lefton-detection.jpg";
import shortCircuitDetection from "@/assets/shortcircuitsparking-detection.jpg";
import overheatingApplianceDetection from "@/assets/overheating-appliance-detection.jpg";
import childUnattendedDetection from "@/assets/child-unattended-detection.jpg";
import petMonitoringFixed from "@/assets/pet-monitoring-fixed.jpg";
import elderlyWanderingDetection from "@/assets/elderly-wandering-detection.jpg";
import anomalyDetectionTflite from "@/assets/anomaly-detection-tflite.jpg";
import occupancyMonitoringFixed from "@/assets/occupancy-monitoring-fixed.jpg";
import deskOccupancyTracking from "@/assets/desk-occupancy-tracking.jpg";
import meetingRoomUtilization from "@/assets/meeting-room-utilization-monitoring.jpg";
import peopleCountingCoworking from "@/assets/people-counting-for-coworking-spaces.jpg";
import employeePostureFocus from "@/assets/employee-posturefocus-analysis.jpg";
import ppeSafetyDetection from "@/assets/ppe-safety-detection.jpg";
import perimeterSecurity from "@/assets/perimeter-security.jpg";
import weaponDetectionSecurity from "@/assets/weapon-detection-security.jpg";
import suspiciousLoiteringAlert from "@/assets/suspicious-loitering-alert.jpg";
import abandonedObjectDetection from "@/assets/abandoned-object-detection.jpg";
import crowdAggressionDetection from "@/assets/crowd-aggression-detection.jpg";
import vehicleDetectionTraffic from "@/assets/vehicle-detection-traffic.jpg";
import speedingVehicleDetection from "@/assets/speeding-vehicle-detection.jpg";
import wrongWayDrivingDetection from "@/assets/wrongway-driving-detection.jpg";
import parkingSpaceOccupancy from "@/assets/parking-space-occupancy-detection.jpg";
import vehicleTypeClassification from "@/assets/vehicle-type-classification.jpg";
import gunshotAcousticDetection from "@/assets/gunshot-acoustic-detection.jpg";
import glassBreakingDetection from "@/assets/glassbreaking-sound-detection.jpg";
import fireworkExplosionDetection from "@/assets/fireworkexplosion-detection.jpg";
import crowdDensityMonitoring from "@/assets/crowd-density-monitoring.jpg";
import publicProtestMonitoring from "@/assets/public-protestrally-monitoring.jpg";
import unsafeWorkerBehavior from "@/assets/unsafe-worker-behavior-detection.jpg";
import forkliftCollisionRisk from "@/assets/forkliftmachine-collision-risk-alerts.jpg";
import workerFatigueFixed from "@/assets/worker-fatigue-fixed.jpg";
import smokeFireConstruction from "@/assets/smokefire-at-construction-site.jpg";
import garbageOverflowDetection from "@/assets/garbage-overflow-detection.jpg";
import environmentalMonitoring from "@/assets/environmental-monitoring.jpg";
import wildAnimalIntrusion from "@/assets/wild-animal-intrusion-detection.jpg";
import streetlightOutageDetection from "@/assets/streetlight-outage-detection.jpg";
import heroAi from "@/assets/hero-ai.jpg";

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
  "Fire Detection CNN": fireDetectionCnn,
  "Gas Leakage Detection": gasLeakDetectionFixed,
  "Stove/Induction Left-on Detection": stoveInductionDetection,
  "Short-circuit/Sparking Detection": shortCircuitDetection,
  "Overheating Appliance Detection": overheatingApplianceDetection,
  "Child Unattended Detection": childUnattendedDetection,
  "Pet Activity Monitoring": petMonitoringFixed,
  "Elderly Wandering Detection": elderlyWanderingDetection,
  "Anomaly Detection TFLite": anomalyDetectionTflite,
  "Smart Occupancy Monitoring": occupancyMonitoringFixed,
  "Desk Occupancy Tracking": deskOccupancyTracking,
  "Meeting Room Utilization Monitoring": meetingRoomUtilization,
  "People Counting for Co-working Spaces": peopleCountingCoworking,
  "Employee Posture/Focus Analysis": employeePostureFocus,
  "Safety Gear Detection": ppeSafetyDetection,
  
  // Outdoor Models
  "Intrusion Detection (Perimeter Breach)": perimeterSecurity,
  "Weapon Detection": weaponDetectionSecurity,
  "Suspicious Loitering Alert": suspiciousLoiteringAlert,
  "Abandoned Object Detection": abandonedObjectDetection,
  "Crowd Aggression Detection": crowdAggressionDetection,
  "ANPR (Automatic Number Plate Recognition)": vehicleDetectionTraffic,
  "Speeding Vehicle Detection": speedingVehicleDetection,
  "Wrong-way Driving Detection": wrongWayDrivingDetection,
  "Parking Space Occupancy Detection": parkingSpaceOccupancy,
  "Vehicle Type Classification": vehicleTypeClassification,
  "Gunshot Detection": gunshotAcousticDetection,
  "Glass-breaking Sound Detection": glassBreakingDetection,
  "Firework/Explosion Detection": fireworkExplosionDetection,
  "Crowd Density Monitoring": crowdDensityMonitoring,
  "Public Protest/Rally Monitoring": publicProtestMonitoring,
  "PPE Compliance Detection": ppeSafetyDetection,
  "Unsafe Worker Behavior Detection": unsafeWorkerBehavior,
  "Forklift/Machine Collision Risk Alerts": forkliftCollisionRisk,
  "Worker Fatigue Monitoring": workerFatigueFixed,
  "Smoke/Fire at Construction Site": smokeFireConstruction,
  "Garbage Overflow Detection": garbageOverflowDetection,
  "Waterlogging/Flood Detection": environmentalMonitoring,
  "Wild Animal Intrusion Detection": wildAnimalIntrusion,
  "Streetlight Outage Detection": streetlightOutageDetection,
  "Weather Anomaly Detection": environmentalMonitoring
};

// Function to get local image for a model
export const getLocalModelImage = (modelName) => {
  return localImageMapping[modelName] || heroAi; // Fallback to hero image
};
