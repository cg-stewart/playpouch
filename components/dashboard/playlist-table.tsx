"use client"

import useSWR from "swr"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Pencil, Trash } from "lucide-react"

// This is a mock fetcher function. Replace it with your actual API call.
const fetcher = async () => {
  // Simulating API call
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return [
    { id: "1", title: "My Beats", itemCount: 50, privacy: "private" },
    { id: "2", title: "Chill Vibes", itemCount: 30, privacy: "public" },
    { id: "3", title: "Workout Mix", itemCount: 25, privacy: "unlisted" },
  ]
}

export default function PlaylistTable() {
  const { data: playlists, error } = useSWR("playlists", fetcher)

  if (error) return <p>Error loading playlists</p>
  if (!playlists) return <p>Loading...</p>

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Items</TableHead>
          <TableHead>Privacy</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {playlists.map((playlist) => (
          <TableRow key={playlist.id}>
            <TableCell>{playlist.title}</TableCell>
            <TableCell>{playlist.itemCount}</TableCell>
            <TableCell>{playlist.privacy}</TableCell>
            <TableCell>
              <Button variant="ghost" size="icon">
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

