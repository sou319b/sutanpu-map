'use client';

import { useState } from 'react'
import { MapIcon, Stamp, Info, CheckCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

// Group 型を定義
type Group = {
  name: string;
  location: string;
  x: number;
  y: number;
}

const groups: Group[] = [
  { name: "1.KAIT VR", location: "K3号館 3階 3306教室", x: 72, y: 88 },
  { name: "2.ECO推進チーム「みどり」", location: "K3号館 6階 3606教室", x: 75, y: 92 },
  { name: "3.鷹野研究室", location: "K1号館 8階 806教室", x: 60, y: 87 },
  { name: "4.生命科学研究室", location: "C6号館 102教室", x: 36, y: 87 },
  { name: "5.知能モビリティ研究室", location: "C5号館 124教室", x: 26, y: 85 },
  { name: "6.Life Hackers", location: "C2号館 E204教室", x: 22, y: 70 },
  { name: "7.山門・鹿野研究室(KAIT Racing)", location: "E6号室 V-07教室", x: 32, y: 48 },
  { name: "8.応用化学生物学科", location: "E2号館 107教室", x: 36, y: 48 }
]

const stampRallyRules = [
  "パンフレットに載っているスタンプラリー・縁日のスタンプカードを確認！！",
  "下に載っている研究室・講義室展示をまわろう",
  "対応するスタンプカードの番号にスタンプを押そう。",
  "スタンプがたまったら、スタンプカードに書かれている景品交換所で交換！！。",
  
]

export default function Component() {
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto p-4">
        <Card className="w-full max-w-4xl mx-auto mt-8 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-blue-800">幾徳祭スタンプラリー</CardTitle>
            <CardDescription className="text-lg text-blue-600">大学をまわって、スタンプを祖いて景品ももらおう！</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
                <Info className="h-6 w-6 mr-2" />
                スタンプラリーのルール
              </h2>
              <ul className="space-y-2">
                {stampRallyRules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4">参加企画一覧</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {groups.map((group, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="w-full justify-between text-left hover:bg-blue-50 transition-colors duration-200 ease-in-out"
                      onClick={() => setSelectedGroup(group)}
                    >
                      <span className="flex items-center">
                        <Stamp className="h-5 w-5 mr-2 text-blue-500" />
                        {group.name}
                      </span>
                      <MapIcon className="h-4 w-4 text-blue-400" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-blue-800">{selectedGroup?.name}</DialogTitle>
                    </DialogHeader>
                    <div className="mt-4">
                      <p className="text-blue-600 font-medium">場所: {selectedGroup?.location}</p>
                      <div className="mt-4 relative rounded-lg overflow-hidden shadow-md">
                        <img 
                          src="canpas.png" 
                          alt="キャンパスマップ" 
                          className="w-full h-auto"
                        />
                        {selectedGroup && (
                          <div 
                            className="absolute transform -translate-x-1/2 -translate-y-1/2"
                            style={{ left: `${selectedGroup.x}%`, top: `${selectedGroup.y}%` }}
                          >
                            <div className="relative">
                              <div className="absolute w-16 h-16 bg-blue-500 rounded-full opacity-25 animate-ping" />
                              <div className="relative w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                {selectedGroup.name.split('.')[0]}
                              </div>
                            </div>
                            <div className="mt-2 bg-white px-2 py-1 rounded shadow-md text-sm font-semibold text-center text-blue-800">
                              {selectedGroup.name.split('.')[1]}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}