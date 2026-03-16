export interface Video {
  title: string;
  youtubeId: string;
  duration: string;
  category: string;
}

export const videos: Video[] = [
  // Latest
  { title: "Standing Bone Strength Workout | Bodyweight Strength Workout for Over 50", youtubeId: "HrMsbsAyc_0", duration: "25:11", category: "Strength" },
  { title: "How to Start Strength Training After 50 | Strength Training Starter Kit for Adults 50+", youtubeId: "F9-w7dH02u0", duration: "3:51", category: "Tips" },
  { title: "One Dumbbell Workout for Over 50 | Build Full Body Strength! Standing & Mat Exercises", youtubeId: "o8ZaaXd8JbU", duration: "28:29", category: "Strength" },
  { title: "Low Impact Cardio, Abs & Balance Workout for 50+ | No Jumping, No Floor!", youtubeId: "q9tgo40ghCY", duration: "27:40", category: "Cardio" },
  { title: "Share and Save Your Most Loved Workouts | Fitness Over 50!", youtubeId: "SpXv0SL0KK4", duration: "7:12", category: "Tips" },
  { title: "Tone and Strengthen Over 50 with Light Dumbbells! 25-Minute Full Body Workout", youtubeId: "6QCzoJZlJn0", duration: "26:13", category: "Strength" },
  { title: "Is Walking Enough To Stay Healthy and Fit Over Age 50?", youtubeId: "S7HsvfLPh-A", duration: "7:34", category: "Tips" },
  { title: "Full Body Workout for Small Spaces + Apartment Friendly | Stay Strong Over 50!", youtubeId: "tpIfhBLDPK8", duration: "26:16", category: "Strength" },
  { title: "Low Impact Cardio + Dumbbell Workout for 50+ | All Standing No Repeats!", youtubeId: "k7kdbixhmhI", duration: "35:15", category: "Cardio" },
  { title: "Incline Push Ups for 50+ | Build Upper Body Strength at Home", youtubeId: "VbzbWcYjeTo", duration: "4:39", category: "Strength" },
  { title: "Chair Pilates Exercises for 50+ | Seated Strengthening Routine for Core & More!", youtubeId: "iV9FGhb_nEg", duration: "18:41", category: "Pilates" },
  { title: "Happy Feet Over 50! Running/Athletic Shoe Chat and Hoka Clifton 10 Unboxing", youtubeId: "aC_dbTsZlio", duration: "5:51", category: "Tips" },
  { title: "20 Min Kettlebell Workout for Beginners and 50+ | Full Body Strengthening", youtubeId: "Nsu922nthW0", duration: "20:53", category: "Strength" },
  { title: "30 Min Walking Interval Workout PLUS Dumbbells | Low Impact, No Repeats, 50+", youtubeId: "k2YHSg-vTz0", duration: "30:48", category: "Cardio" },
  { title: "Standing Pilates Workout! Strengthen Legs, Hips & Abs | 50+", youtubeId: "Mskr8t6n5Rk", duration: "22:08", category: "Pilates" },
  { title: "Upper Body Strength with One Dumbbell | Over 50!", youtubeId: "TCzODeqgSm0", duration: "13:49", category: "Strength" },
  { title: "8 Minute Full Body Stretching Routine for Over 50!", youtubeId: "kFwwvX-qvIs", duration: "8:12", category: "Stretching" },
  { title: "15-Minute Stretch & Mobility Mat Routine Using a Yoga Strap", youtubeId: "TtyA2FJbIVc", duration: "15:10", category: "Stretching" },
  { title: "Quick Warm Up Exercise Routine to Reduce Stiffness & Improve Mobility Over 50!", youtubeId: "oF7A-Pla2KA", duration: "7:48", category: "Stretching" },
  { title: "Holiday Energy Booster! 12-Minute Fun Standing Workout for 50+", youtubeId: "T5oi83AWgHE", duration: "12:20", category: "Cardio" },
  { title: "30-Minute Alternate Cardio & Light Weights Workout for 50+!", youtubeId: "MBNULccsHbg", duration: "33:34", category: "Cardio" },
  { title: "Low Impact Workout for Sensitive Knees | All Standing Strength Routine for 50+", youtubeId: "eFDJmkWpVrM", duration: "28:05", category: "Strength" },
  { title: "Fun Walking Interval Workout for 50+ | Low Impact Steps and Strength", youtubeId: "fUCOXlK-XrI", duration: "26:27", category: "Cardio" },
  { title: "Abs & Full Body Strength for 50+ | All Standing Low Impact Routine", youtubeId: "gDu6ZFMmD-U", duration: "24:29", category: "Strength" },
  { title: "Standing Resistance Band Workout for Over 50 | Build Strength at Home", youtubeId: "GwiY4CFst9s", duration: "23:08", category: "Strength" },
  { title: "8 Thoughtful Fitness & Wellness Gifts for People Over 50 (2025)", youtubeId: "JUEnMbeujr8", duration: "15:05", category: "Tips" },
  { title: "Cardio & Abs for Over 50 | Low Impact, All Standing, No Repeats", youtubeId: "mmIEUWDx8bI", duration: "27:55", category: "Cardio" },
  { title: "Kettlebell Workout for Beginners Over 50 | Build Strength & Confidence", youtubeId: "Y8vHQ9cSQBE", duration: "20:58", category: "Strength" },
];

export const videoCategories = ["All", "Strength", "Cardio", "Pilates", "Stretching", "Tips"] as const;
