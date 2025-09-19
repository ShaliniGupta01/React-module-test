import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "pocket-notes";

function load() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : { groups: [] };
}

function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getGroups() {
  return load().groups;
}

export function addGroup(name) {
  const data = load();
  const newGroup = { id: uuidv4(), name, notes: [] };
  data.groups.push(newGroup);
  save(data);
}

export function getNotes(groupId) {
  const data = load();
  const group = data.groups.find((g) => g.id === groupId);
  return group ? group.notes : [];
}

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
