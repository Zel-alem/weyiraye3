import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Truck, Shield, TrendingUp, Users } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Top Tips for Safe Cargo Transport",
    excerpt: "Learn essential safety practices to ensure your goods reach their destination safely and securely.",
    content:
      "Discover the best practices for cargo safety, from proper packaging to choosing verified transport providers.",
    author: "Weyriaye Safety Team",
    date: "2025-01-15",
    category: "Safety",
    readTime: "5 min read",
    icon: "Shield",
    color: "text-primary",
  },
  {
    id: 2,
    title: "Maximizing Fleet Efficiency",
    excerpt:
      "Smart truck management strategies for owners looking to optimize their fleet operations and profitability.",
    content:
      "Explore advanced fleet management techniques that can help truck owners increase utilization and reduce costs.",
    author: "Fleet Management Expert",
    date: "2025-01-12",
    category: "Fleet Management",
    readTime: "7 min read",
    icon: "Truck",
    color: "text-accent",
  },
  {
    id: 3,
    title: "Agent Success Stories",
    excerpt: "How agents are earning commissions by facilitating trips and building strong networks across Ethiopia.",
    content:
      "Real stories from successful Weyriaye agents who have built thriving businesses by connecting cargo owners and truck owners.",
    author: "Agent Network Team",
    date: "2025-01-10",
    category: "Success Stories",
    readTime: "6 min read",
    icon: "Users",
    color: "text-primary",
  },
  {
    id: 4,
    title: "Ethiopia's Logistics Industry Trends",
    excerpt: "Latest updates and insights on Ethiopia's evolving logistics landscape and digital transformation.",
    content:
      "An in-depth analysis of how technology is reshaping cargo transport and logistics operations in Ethiopia.",
    author: "Industry Analyst",
    date: "2025-01-08",
    category: "Industry Insights",
    readTime: "8 min read",
    icon: "TrendingUp",
    color: "text-accent",
  },
  {
    id: 5,
    title: "Driver Training and Certification",
    excerpt: "The importance of proper driver training and how it benefits the entire cargo transport ecosystem.",
    content:
      "Understanding the value of certified drivers and how training programs improve safety and service quality.",
    author: "Training Department",
    date: "2025-01-05",
    category: "Training",
    readTime: "4 min read",
    icon: "User",
    color: "text-primary",
  },
  {
    id: 6,
    title: "Digital Payments in Logistics",
    excerpt: "How instant digital payments are revolutionizing the cargo transport industry in Ethiopia.",
    content: "Exploring the benefits of digital payment systems and their impact on logistics efficiency and trust.",
    author: "Fintech Team",
    date: "2025-01-03",
    category: "Technology",
    readTime: "5 min read",
    icon: "TrendingUp",
    color: "text-accent",
  },
]

const categories = [
  "All",
  "Safety",
  "Fleet Management",
  "Success Stories",
  "Industry Insights",
  "Training",
  "Technology",
]

const renderIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case "Shield":
      return <Shield className={className} />
    case "Truck":
      return <Truck className={className} />
    case "Users":
      return <Users className={className} />
    case "TrendingUp":
      return <TrendingUp className={className} />
    case "User":
      return <User className={className} />
    default:
      return <Shield className={className} />
  }
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-secondary/10 to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Weyriaye <span className="text-primary">Blog</span> & News
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Stay updated with the latest insights, tips, and news from Ethiopia's leading cargo transport platform.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="border-border text-muted-foreground hover:text-foreground hover:border-primary/50 bg-transparent"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Featured Article</h2>
            </div>

            <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 mb-16">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                  {renderIcon(blogPosts[0].icon, "h-24 w-24 text-primary")}
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-2">
                      <Badge className="bg-primary text-primary-foreground">{blogPosts[0].category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(blogPosts[0].date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-1" />
                        {blogPosts[0].author}
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-foreground">{blogPosts[0].title}</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground">{blogPosts[0].excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-pretty">{blogPosts[0].content}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{blogPosts[0].readTime}</span>
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-secondary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Latest Articles</h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Explore our collection of insights and tips for the cargo transport industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Card
                  key={post.id}
                  className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                      {renderIcon(post.icon, `h-6 w-6 ${post.color}`)}
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg text-foreground text-balance">{post.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-pretty">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author.split(" ")[0]}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-border text-muted-foreground hover:text-foreground hover:border-primary/50 bg-transparent"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-border">
              <CardContent className="p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Stay Updated with <span className="text-primary">Weyriaye</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 text-pretty">
                  Subscribe to our newsletter for the latest industry insights, platform updates, and logistics tips.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground"
                  />
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
