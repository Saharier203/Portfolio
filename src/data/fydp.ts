export type FYDPImage = {
  src: string;
  filename: string;
  alt: string;
  caption: string;
  duration?: string;
};

export const beforeAfterImages: FYDPImage[] = [
  {
    src: "/images/fydp/video/original-video.jpg",
    filename: "original-video.jpg",
    alt: "Screenshot of the original educational video before summarization.",
    caption: "Original Video",
    duration: "15:00",
  },
  {
    src: "/images/fydp/video/summarized-video.jpg",
    filename: "summarized-video.jpg",
    alt: "Screenshot of the educational video after summarization.",
    caption: "Summarized Video",
    duration: "11:13",
  },
];

export const timelineImage: FYDPImage = {
  src: "/images/fydp/timeline/keep-discard-timeline.jpeg",
  filename: "keep-discard-timeline.jpeg",
  alt: "Segment timeline with video frames and labels showing 1 as keep and 0 as discard.",
  caption: "KEEP / DISCARD segment timeline",
};

export const architectureImage: FYDPImage = {
  src: "/images/fydp/architecture/framework.png",
  filename: "framework.png",
  alt: "Multimodal educational video summarization framework diagram.",
  caption: "Multimodal Summarization Framework",
};

export const evaluationImages: (FYDPImage & { title: string; description: string })[] = [
  {
    src: "/images/fydp/evaluation/confusion-matrix.jpeg",
    filename: "confusion-matrix.jpeg",
    alt: "Random Forest confusion matrix from the project evaluation.",
    caption: "Random Forest Confusion Matrix",
    title: "Random Forest Confusion Matrix",
    description:
      "Summarizes the Random Forest model's predicted segment labels against the reference labels. The class-wise decisions and errors are shown in the original matrix.",
  },
  {
    src: "/images/fydp/evaluation/roc-curve.jpeg",
    filename: "roc-curve.jpeg",
    alt: "ROC curve from the project model evaluation.",
    caption: "ROC Curve",
    title: "ROC Curve",
    description:
      "Shows model discrimination as the classification threshold changes. The supplied curve and any reported values remain unaltered.",
  },
  {
    src: "/images/fydp/evaluation/precision-recall.jpeg",
    filename: "precision-recall.jpeg",
    alt: "Precision-recall curve from the project model evaluation.",
    caption: "Precision-Recall Curve",
    title: "Precision-Recall Curve",
    description:
      "Illustrates the precision and recall relationship for identifying important segments, using the axes and values in the original figure.",
  },
  {
    src: "/images/fydp/evaluation/cross-validation.jpeg",
    filename: "cross-validation.jpeg",
    alt: "XGBoost cross-validation results from the project experiments.",
    caption: "XGBoost Cross-Validation Results",
    title: "XGBoost Cross-Validation Results",
    description:
      "Presents the cross-validation results reported for XGBoost. Fold scores and other values will be shown exactly as they appear in the supplied image.",
  },
  {
    src: "/images/fydp/evaluation/model-comparison.jpeg",
    filename: "model-comparison.jpeg",
    alt: "Chart comparing model results from the project experiments.",
    caption: "Model Comparison Chart",
    title: "Model Comparison Chart",
    description:
      "Compares the evaluated models using the criteria in the original chart; no additional results are inferred here.",
  },
  {
    src: "/images/fydp/evaluation/performance-table.jpeg",
    filename: "performance-table.jpeg",
    alt: "Performance comparison table from the project experiments.",
    caption: "Performance Comparison Table",
    title: "Performance Comparison Table",
    description:
      "Collects the model metrics reported in the supplied table. Values will be preserved in the original image rather than re-created.",
  },
];

export const fydpTechnologies = [
  "Python",
  "Faster-Whisper",
  "Mistral 7B",
  "vLLM",
  "CLIP",
  "OpenCV",
  "Scikit-learn",
  "XGBoost",
  "FFmpeg",
];

export const architectureStages = [
  "Educational video input",
  "Audio and visual processing",
  "Speech transcription and text feature extraction",
  "Visual feature extraction",
  "LLM-based importance labeling",
  "Machine-learning classification",
  "KEEP / DISCARD decisions",
  "Final video generation",
];

export const datasetOverview = [
  {
    value: "≈270,000",
    label: "segments in the expanded training corpus",
  },
  {
    value: "≈900",
    label: "educational videos in the expanded corpus",
  },
  {
    value: "80 / 20",
    label: "seen-data split for machine-learning experiments",
  },
  {
    value: "≈20,000",
    label: "samples reported for validation and cross-validation",
  },
  {
    value: "5K+ · 26",
    label: "segments · videos in the earlier unseen-data set",
  },
];

export const datasetFeatures = [
  "Speech",
  "Keywords",
  "Word density",
  "Importance",
  "Motion score",
  "Scene change",
  "Semantic shift",
  "Video-importance score",
];

export const datasetColumnsImage: FYDPImage = {
  src: "/images/fydp/dataset/dataset-columns.png",
  filename: "dataset-columns.png",
  alt: "Sample dataset rows with segment timestamps, captions, speech and feature columns, KEEP or DISCARD decisions, and a manual-label column.",
  caption: "Sample dataset columns",
};
