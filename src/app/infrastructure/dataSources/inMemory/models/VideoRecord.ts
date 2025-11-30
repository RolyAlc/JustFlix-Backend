// Aci definim els models de dades amb què es treballa 
// en esta capa de persistència (els DAO en altres contextos)

export interface VideoRecord {
  id: string;
  topic: string;
  description: string;
  duration: number;
  thumbnail: string;
  videoUrl: string;
}
