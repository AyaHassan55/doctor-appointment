import { Shield, Clock, Award, HeartPulse } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Trusted Care',
    description: 'All our doctors are verified professionals with proven track records.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Access healthcare services anytime, anywhere with our round-the-clock support.',
  },
  {
    icon: Award,
    title: 'Expert Specialists',
    description: 'Connect with leading specialists across various medical fields.',
  },
  {
    icon: HeartPulse,
    title: 'Personalized Care',
    description: 'Receive treatment plans tailored to your unique health needs.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Healthcare Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with compassionate care to deliver 
            exceptional medical services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


