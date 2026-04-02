/**
 * data/testimonials.js
 * Mock testimonials for فيو (View) — ceramic, marble & luxury sinks
 */

export const TESTIMONIALS = [
  {
    id: 1,
    name: "عبدالرحمن المنصور",
    city: "الدمام",
    rating: 5,
    review:
      "تجربة استثنائية من البداية للنهاية. فريق فيو نفّذ تشطيبات الرخام في فيلتنا بدقة واحترافية لم أجدها عند أحد آخر. جودة الرخام الإيطالي فاقت توقعاتي، وسيتذكر كل زائر لمنزلنا هذا الجمال.",
    service: "تركيب الرخام",
    project: "فيلا سكنية",
    date: "مارس ٢٠٢٥",
    featured: true,
  },
  {
    id: 2,
    name: "نورة الشمري",
    city: "الخبر",
    rating: 5,
    review:
      "المغسلة التي نفّذوها في حمام الضيوف أصبحت محور إعجاب كل من زار منزلنا. الخامات فاخرة والتنفيذ نظيف جداً. أنصح به بكل ثقة.",
    service: "المغاسل الفاخرة",
    project: "حمام منزلي",
    date: "يناير ٢٠٢٥",
    featured: false,
  },
  {
    id: 3,
    name: "فهد العتيبي",
    city: "الرياض",
    rating: 5,
    review:
      "طلبت تركيب سيراميك لمشروع تجاري كبير، والتزم الفريق بالجدول الزمني تماماً دون أي تأخير. النتيجة النهائية رائعة والعملاء معجبون جداً بمظهر المكان.",
    service: "تركيب السيراميك",
    project: "مشروع تجاري",
    date: "فبراير ٢٠٢٥",
    featured: false,
  },

];

/** Overall rating summary */
export const RATING_SUMMARY = {
  average: 4.9,
  total:   "+٢٠٠",
  label:   "تقييم العملاء",
};