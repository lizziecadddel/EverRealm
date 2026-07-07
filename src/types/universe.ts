// Universe and Character Types for EverRealm

export type UniverseId = 
  | 'harry-potter' 
  | 'acotar' 
  | 'tog' 
  | 'blood-and-ash' 
  | 'fourth-wing'
  | 'everwood'
  | 'astral-academy'
  | 'iron-coast';

export interface Universe {
  id: UniverseId;
  name: string;
  description: string;
  author?: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundUrl?: string;
  mood: string;
  tone: string;
  locations: string[];
  themes: string[];
}

export interface UniverseCharacter {
  id: string;
  name: string;
  universeId: UniverseId;
  title?: string; // e.g., "Hermione Granger", "High Lady of the Night Court"
  description: string;
  personality: string[];
  role: 'mentor' | 'rival' | 'friend' | 'love-interest' | 'mysterious' | 'ally';
  imageUrl?: string;
  specialAbilities?: string[];
  favoriteTopics?: string[];
  questsGiven?: string[];
}

export interface UserPersona {
  id: string;
  name: string;
  universeId: UniverseId;
  archetype: 'seeker' | 'warden' | 'oracle' | 'wanderer' | 'mage';
  level: number;
  xp: number;
  stats: {
    strength: number;
    wisdom: number;
    charisma: number;
    magic: number;
    resilience: number;
  };
  skills: string[];
  inventory: InventoryItem[];
  relationships: RelationshipRecord[];
  storyProgress: string[];
  createdDate: string;
  updatedDate: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  description: string;
  type: 'weapon' | 'artifact' | 'potion' | 'book' | 'accessory' | 'other';
  universeSpecific: boolean;
}

export interface RelationshipRecord {
  characterId: string;
  characterName: string;
  level: 'stranger' | 'acquaintance' | 'friend' | 'close-friend' | 'beloved' | 'rival' | 'enemy';
  memories: InteractionMemory[];
  affinity: number; // 0-100
}

export interface InteractionMemory {
  id: string;
  timestamp: string;
  characterName: string;
  summary: string;
  emotionalTone: string;
  importanceLevel: number; // 1-5
}

export interface StoryScene {
  id: string;
  personaId: string;
  universeId: UniverseId;
  title: string;
  description: string;
  characters: UniverseCharacter[];
  choices?: StoryChoice[];
  narrative: string;
  timestamp: string;
  emotionalImpact?: string;
}

export interface StoryChoice {
  id: string;
  text: string;
  consequence?: string;
  relationshipImpact?: {
    characterId: string;
    affinityChange: number;
  }[];
}

export interface Conversation {
  id: string;
  personaId: string;
  characterId: string;
  universeId: UniverseId;
  messages: ConversationMessage[];
  startedAt: string;
  endedAt?: string;
}

export interface ConversationMessage {
  id: string;
  sender: 'user' | 'character';
  content: string;
  timestamp: string;
  emotionalContext?: string;
}
