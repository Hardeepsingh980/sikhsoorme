import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageSquare, Github, Users, BookOpen, Heart, Clock, Send } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - SikhSoorme",
  description:
    "Get in touch with the SikhSoorme community. Whether you have questions, want to contribute, or need support, we're here to help.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 via-orange-800 to-red-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-amber-100">Contact Us</h1>
          <p className="text-xl md:text-2xl text-amber-200 max-w-3xl mx-auto">
            {"Connect with our community. We're here to help, collaborate, and grow together."}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-2 border-amber-200 hover:border-amber-300 transition-colors">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-amber-700" />
              </div>
              <CardTitle className="text-amber-900">General Inquiries</CardTitle>
              <CardDescription>Questions about the project or general support</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent">
                hello@sikhsoorme.com
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 hover:border-orange-300 transition-colors">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-orange-700" />
              </div>
              <CardTitle className="text-orange-900">Content & Research</CardTitle>
              <CardDescription>Historical accuracy, content suggestions, research collaboration</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50 bg-transparent">
                research@sikhsoorme.com
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-red-200 hover:border-red-300 transition-colors">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="w-6 h-6 text-red-700" />
              </div>
              <CardTitle className="text-red-900">Technical Support</CardTitle>
              <CardDescription>Bug reports, technical issues, development questions</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent">
                tech@sikhsoorme.com
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-2 border-amber-200">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900 flex items-center gap-2">
                <Send className="w-6 h-6" />
                Send us a Message
              </CardTitle>
              <CardDescription>{"Fill out the form below and we'll get back to you within 24-48 hours."}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <Input id="name" placeholder="Your full name" className="border-amber-200 focus:border-amber-400" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-amber-200 focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiry-type" className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type *
                </label>
                <Select>
                  <SelectTrigger className="border-amber-200 focus:border-amber-400">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Question</SelectItem>
                    <SelectItem value="contribution">Want to Contribute</SelectItem>
                    <SelectItem value="research">Research Collaboration</SelectItem>
                    <SelectItem value="content">Content Suggestion</SelectItem>
                    <SelectItem value="technical">Technical Issue</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    <SelectItem value="media">Media Inquiry</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  placeholder="Brief description of your inquiry"
                  className="border-amber-200 focus:border-amber-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Please provide details about your inquiry..."
                  rows={6}
                  className="border-amber-200 focus:border-amber-400"
                />
              </div>

              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>

              <p className="text-sm text-gray-600 text-center">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </CardContent>
          </Card>

          {/* Community & Other Ways to Connect */}
          <div className="space-y-8">
            {/* Community Channels */}
            <Card className="border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="text-xl text-orange-900 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Join Our Community
                </CardTitle>
                <CardDescription>Connect with fellow enthusiasts and contributors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-orange-600" />
                    <div>
                      <h4 className="font-medium text-orange-900">Discord Community</h4>
                      <p className="text-sm text-orange-700">Real-time discussions and support</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-orange-300 text-orange-700 bg-transparent">
                    Join
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-gray-600" />
                    <div>
                      <h4 className="font-medium text-gray-900">GitHub Repository</h4>
                      <p className="text-sm text-gray-700">Contribute code and report issues</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="border-gray-300 text-gray-700 bg-transparent">
                    Visit
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Response Times */}
            <Card className="border-2 border-red-200">
              <CardHeader>
                <CardTitle className="text-xl text-red-900 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Response Times
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">General Inquiries</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    24-48 hours
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Technical Issues</span>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    1-3 days
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Research Collaboration</span>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    3-5 days
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Partnership Inquiries</span>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    1-2 weeks
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Project Information */}
            <Card className="border-2 border-amber-200">
              <CardHeader>
                <CardTitle className="text-xl text-amber-900 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  About Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  SikhSoorme is a community-driven project dedicated to preserving and sharing the rich heritage of Sikh
                  history and personalities.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-700">128+</div>
                    <div className="text-sm text-amber-600">Personalities</div>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-700">47+</div>
                    <div className="text-sm text-orange-600">Contributors</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-left h-auto p-3">
                  <div>
                    <div className="font-medium">How can I contribute content?</div>
                    <div className="text-sm text-gray-600">Learn about our contribution process</div>
                  </div>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left h-auto p-3">
                  <div>
                    <div className="font-medium">Is the project open source?</div>
                    <div className="text-sm text-gray-600">Yes, find us on GitHub</div>
                  </div>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left h-auto p-3">
                  <div>
                    <div className="font-medium">How do you verify historical accuracy?</div>
                    <div className="text-sm text-gray-600">Our research and review process</div>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="border-2 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">Ready to Get Involved?</h2>
              <p className="text-lg text-amber-700 mb-8 max-w-2xl mx-auto">
                {"Whether you're a researcher, developer, educator, or simply passionate about Sikh heritage, there's a place for you in our community."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                  Start Contributing
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
                >
                  Join Discord
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
