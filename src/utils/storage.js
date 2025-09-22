import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "pocket-notes";

// Load entire app data
function load() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { groups: [] };
}

// Save entire app data
function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getInitials(name) {
  return name
    .trim()
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// ✅ Get all groups
export function getGroups() {
  const data = load();
  return data.groups;
}

// ✅ Add new group with color
export function addGroup(name, color) {
  const data = load();
  const newGroup = {
    id: uuidv4(),
    name,
    color, // store selected color
    notes: [],
  };
  data.groups.push(newGroup);
  save(data);
}

// ✅ Get all notes for a group
export function getNotes(groupId) {
  const data = load();
  const group = data.groups.find((g) => g.id === groupId);
  return group ? group.notes : [];
}

// ✅ Add a note to a group
export function addNote(groupId, content) {
  const data = load();
  const group = data.groups.find((g) => g.id === groupId);
  if (!group) return;
  const now = new Date().toISOString();
  group.notes.push({
    id: uuidv4(),
    content,
    createdAt: now,
    updatedAt: now,
  });
  save(data);
}
