import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DiscordLogoIcon } from '@radix-ui/react-icons';

const Home = () => {
  const discordInviteLink = "https://discord.gg/x8Ngu6ZdFj";

  const handleJoinDiscord = () => {
    window.open(discordInviteLink, '_blank');
  };

  return (
    <section className="min-h-[calc(100vh-8rem)] flex items-center justify-center p-4">
      <Card className="w-full max-w-lg">
        <CardContent className="p-8">
          <div className="text-center space-y-8">
            {/* Dr Hayday Logo Animation */}
            <div className="relative w-32 h-32 mx-auto">
              <div className="absolute inset-0 animate-float">
                <img 
                  src="https://res.cloudinary.com/diaxg9ypf/image/upload/v1735801791/drhayday_aaarxr.png"
                  alt="Dr Hayday Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -right-4 -top-4 animate-pulse-slow">
                <span role="img" aria-label="sparkles" className="text-4xl">
                  ✨
                </span>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="space-y-3">
              <CardTitle className="text-4xl">Welcome to Dr Hayday</CardTitle>
              <CardDescription className="text-base max-w-md mx-auto">
                Join our vibrant Discord community! Connect with fellow players, share strategies, and stay updated with the latest news.
              </CardDescription>
            </div>

            {/* Discord Join Button */}
            <div className="flex justify-center">
              <Button 
                onClick={handleJoinDiscord}
                className="flex items-center gap-2 text-lg px-8 py-6"
                size="lg"
              >
                <DiscordLogoIcon className="w-6 h-6" />
                Join Our Discord
              </Button>
            </div>

            {/* Community Highlights */}
            <div className="p-4 bg-muted rounded-lg">
              <h3 className="text-sm font-medium mb-2">
                Community Features 🌟
              </h3>
              <p className="text-sm text-muted-foreground">
                Active discussions, helpful tips, trading, friendly community,
                and regular giveaways await you in our Discord server!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;