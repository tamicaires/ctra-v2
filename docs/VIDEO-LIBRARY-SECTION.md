# 🎬 VIDEO LIBRARY SECTION - Premium Streaming Experience

## Conceito: Netflix/YouTube Premium para Artes Marciais

---

## 🎯 **OBJETIVO**

Criar uma experiência de vídeo biblioteca **altamente avançada** que:
- Pareça um serviço de streaming profissional (Netflix, YouTube, Disney+)
- Organize vídeos de técnicas, posições, treinos, etc.
- Seja intuitivo e viciante de navegar
- Converta visitantes mostrando o valor do conteúdo

---

## 📐 **LAYOUT PRINCIPAL**

```
+------------------------------------------------------------------+
|                      BIBLIOTECA DE TÉCNICAS                       |
|        Aprenda com os melhores. Domine cada movimento.           |
+------------------------------------------------------------------+
|                                                                  |
|  [All] [Muay Thai] [Jiu-Jitsu] [Boxe] [MMA] [Iniciante]        |
|  --------------------------------------------------------        |
|                                                                  |
|  [🔍 Buscar técnicas...]                    [Grid] [List]       |
|                                                                  |
|  +----------------+  +----------------+  +----------------+      |
|  | [Thumbnail]    |  | [Thumbnail]    |  | [Thumbnail]    |      |
|  | [▶ Play]       |  | [▶ Play]       |  | [▶ Play]       |      |
|  |                |  |                |  |                |      |
|  | Jab Cruzado    |  | Kimura do      |  | Low Kick       |      |
|  | Boxe • 1:24    |  | Jiu-Jitsu •... |  | Muay Thai •... |      |
|  | [Iniciante]    |  | [Avançado]     |  | [Intermediário]|      |
|  +----------------+  +----------------+  +----------------+      |
|                                                                  |
|  +----------------+  +----------------+  +----------------+      |
|  | [Mais vídeos...]                                             |
|  +----------------+  +----------------+  +----------------+      |
|                                                                  |
|  [Carregar Mais Vídeos]                                         |
|                                                                  |
+------------------------------------------------------------------+
```

---

## 🎨 **FUNCIONALIDADES & UX**

### 1. Sistema de Filtros/Categorias
**Filtros Disponíveis**:
- **Modalidade**: All | Muay Thai | Jiu-Jitsu | Boxe | MMA
- **Nível**: Iniciante | Intermediário | Avançado
- **Tipo**: Técnica | Posição | Combinação | Treino | Aquecimento
- **Duração**: < 30s | 30s-1min | > 1min

**Comportamento**:
- Pills/Tabs clicáveis
- Filtros cumulativos (pode selecionar múltiplos)
- Transição suave ao filtrar
- Counter de resultados: "12 vídeos encontrados"

**Ícones** (Lucide):
- Filter: `Filter`
- Tag: `Tag`
- X (remover filtro): `X`

---

### 2. Busca de Vídeos
**Features**:
- Search bar estilizado
- Busca em tempo real (debounced 300ms)
- Placeholder: "Buscar técnicas, posições, movimentos..."
- Highlight dos termos encontrados
- Sugestões populares

**Ícones**:
- Search: `Search`
- Clear: `X`

---

### 3. Grid de Vídeos (Cards)

**Layout do Card**:
```
+------------------------+
| [Thumbnail do YouTube] |
| [Overlay escuro]       |
| [▶ Play Button]        |
| [Duração: 1:24]        |
+------------------------+
| Título do Vídeo        |
| Modalidade • Duração   |
| [Badge: Nível]         |
+------------------------+
```

**Informações no Card**:
- **Thumbnail** (auto-fetch do YouTube: `https://img.youtube.com/vi/{VIDEO_ID}/maxresdefault.jpg`)
- **Título** (ex: "Jab Cruzado - Fundamento do Boxe")
- **Modalidade** (ex: "Boxe")
- **Duração** (ex: "1:24")
- **Nível** (Badge: Iniciante/Intermediário/Avançado)
- **Play button** centralizado

**Hover Effects** (Desktop):
- Scale up suave (1.05)
- Glow effect na borda
- Play button cresce
- Overlay fica mais escuro
- Título fica branco puro
- (Opcional) Preview do vídeo auto-play muted

**Ícones**:
- Play: `Play`
- Clock: `Clock`

---

### 4. Modal/Player de Vídeo

**Quando clica em um vídeo**:
Abre modal fullscreen com:

```
+------------------------------------------------------------------+
| [X Fechar]                                    [← Anterior] [Próximo →] |
+------------------------------------------------------------------+
|                                                                  |
|                    [YouTube Player Embed]                        |
|                    [Responsivo 16:9]                             |
|                                                                  |
+------------------------------------------------------------------+
|                                                                  |
| Jab Cruzado - Fundamento do Boxe                                |
| Boxe • Iniciante • 1:24                                          |
|                                                                  |
| Descrição: Aprenda o jab cruzado, um dos golpes fundamentais    |
| do boxe. Neste vídeo, nosso mestre demonstra a técnica correta, |
| posicionamento e erros comuns.                                   |
|                                                                  |
| Tags: #Boxe #Iniciante #Jab #Fundamentos                         |
|                                                                  |
+------------------------------------------------------------------+
|                     VÍDEOS RELACIONADOS                          |
|  [Mini Card 1]  [Mini Card 2]  [Mini Card 3]  [Mini Card 4]    |
+------------------------------------------------------------------+
```

**Features do Modal**:
- Background overlay escuro (backdrop blur)
- YouTube embed responsivo
- Fechar com ESC ou clique fora
- Navegação: próximo/anterior vídeo
- Scroll lock no body
- Autoplay ao abrir
- Descrição do vídeo
- Tags clicáveis
- Vídeos relacionados (mesma categoria)

**Ícones**:
- Close: `X`
- Arrow Left: `ChevronLeft`
- Arrow Right: `ChevronRight`
- Share: `Share2` (opcional)

---

### 5. Views Alternativas

**Grid View** (padrão):
- 3 colunas desktop
- 2 colunas tablet
- 1 coluna mobile
- Cards grandes com thumbnails

**List View** (opcional):
- Lista vertical
- Thumbnail menor à esquerda
- Mais informações visíveis
- Melhor para scan rápido

**Toggle**:
- Ícones: `Grid3x3` e `List`

---

## 📊 **ESTRUTURA DE DADOS DOS VÍDEOS**

```typescript
interface Video {
  id: string;                    // ID único
  youtubeId: string;            // ID do vídeo no YouTube
  title: string;                // "Jab Cruzado - Fundamento"
  description: string;          // Descrição completa
  modality: Modality;           // "muay-thai" | "jiu-jitsu" | "boxe" | "mma"
  level: Level;                 // "iniciante" | "intermediario" | "avancado"
  type: VideoType;              // "tecnica" | "posicao" | "combinacao" | "treino"
  duration: string;             // "1:24"
  tags: string[];               // ["boxe", "jab", "fundamentos"]
  thumbnail?: string;           // URL custom ou auto do YouTube
  featured?: boolean;           // Destaque
  viewCount?: number;           // Views (opcional)
  createdAt: Date;              // Data de publicação
}

type Modality = "muay-thai" | "jiu-jitsu" | "boxe" | "mma" | "all";
type Level = "iniciante" | "intermediario" | "avancado";
type VideoType = "tecnica" | "posicao" | "combinacao" | "treino" | "aquecimento";
```

**Exemplo de dados**:
```typescript
const videos: Video[] = [
  {
    id: "1",
    youtubeId: "dQw4w9WgXcQ",
    title: "Jab Cruzado - Fundamento do Boxe",
    description: "Aprenda o jab cruzado, um dos golpes fundamentais do boxe...",
    modality: "boxe",
    level: "iniciante",
    type: "tecnica",
    duration: "1:24",
    tags: ["boxe", "jab", "fundamentos", "iniciante"],
    featured: true,
  },
  {
    id: "2",
    youtubeId: "abc123xyz",
    title: "Kimura do Lado - Jiu-Jitsu",
    description: "Técnica de finalização kimura a partir da posição lateral...",
    modality: "jiu-jitsu",
    level: "avancado",
    type: "posicao",
    duration: "2:15",
    tags: ["jiu-jitsu", "kimura", "finalizacao", "lateral"],
    featured: false,
  },
  // ... mais vídeos
];
```

---

## 🎨 **DESIGN DETALHADO**

### Header da Section
```
Título: "Biblioteca de Técnicas"
Subtitle: "Aprenda com os melhores. Domine cada movimento."
Description: "Acesso a dezenas de vídeos exclusivos com técnicas, posições e treinos ministrados pelos nossos mestres. Conteúdo para todos os níveis."
```

### Color Scheme (Preto/Branco)
- **Background**: #000000
- **Cards**: #0a0a0a com border #1a1a1a
- **Hover**: Glow branco rgba(255,255,255,0.1)
- **Text**: #ffffff (títulos), #a0a0a0 (meta)
- **Badges**:
  - Iniciante: border branco, background transparente
  - Intermediário: border cinza claro
  - Avançado: border branco com glow

### Typography
- **Título do vídeo**: 1.125rem (18px), font-medium
- **Meta info**: 0.875rem (14px), font-normal, opacity 70%
- **Badges**: 0.75rem (12px), uppercase, tracking-wide

### Spacing
- Gap entre cards: 1.5rem (24px)
- Padding do card: 1rem (16px) no conteúdo
- Margin bottom da section: 6rem (96px)

### Transitions
- Hover: 300ms ease-in-out
- Filter change: 500ms cubic-bezier
- Modal open/close: 200ms

---

## 🎬 **YOUTUBE EMBED ESTILIZADO**

### Embed Code (Next.js)
```typescript
// Componente YouTubeEmbed.tsx
interface YouTubeEmbedProps {
  videoId: string;
  autoplay?: boolean;
  title?: string;
}

const YouTubeEmbed = ({ videoId, autoplay = false, title }: YouTubeEmbedProps) => {
  return (
    <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg">
      <iframe
        className="absolute top-0 left-0 w-full h-full border-0"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&rel=0&modestbranding=1&controls=1`}
        title={title || "Video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};
```

### URL Parameters para estilizar:
- `rel=0` - Não mostrar vídeos relacionados de outros canais
- `modestbranding=1` - Logo do YouTube menor
- `controls=1` - Mostrar controles
- `autoplay=0/1` - Autoplay on/off
- `iv_load_policy=3` - Esconder anotações

---

## 📱 **RESPONSIVIDADE**

### Desktop (> 1024px)
- Grid: 3 colunas
- Filtros: linha horizontal
- Modal: 90% da tela, max-width 1200px

### Tablet (768px - 1024px)
- Grid: 2 colunas
- Filtros: wrap em 2 linhas se necessário
- Modal: 95% da tela

### Mobile (< 768px)
- Grid: 1 coluna
- Filtros: scroll horizontal ou accordion
- Modal: fullscreen
- Player: mantém aspect ratio 16:9

---

## ✨ **EFEITOS AVANÇADOS**

### 1. Skeleton Loading
Enquanto carrega os vídeos, mostrar placeholders animados:
```
+------------------------+
| [█████████████████████ ]
| [█████ Shimmer ████████]
| [█████████████████████ ]
+------------------------+
| [████████]             |
| [████]                 |
+------------------------+
```

### 2. Infinite Scroll / Load More
- Carregar 12 vídeos inicialmente
- Botão "Carregar Mais" ou infinite scroll
- Loader animado ao carregar

### 3. Empty States
Se busca não retornar resultados:
```
[🔍 Ícone]
Nenhum vídeo encontrado
Tente buscar por outro termo ou remova os filtros
[Limpar Filtros]
```

### 4. Featured Video (Destaque)
Primeiro vídeo pode ser maior/hero style:
```
+----------------------------------------------------------+
| [Thumbnail Grande - Featured]                            |
| [Play Button Grande]                                     |
|                                                          |
| DESTAQUE: Sequência Completa de Muay Thai                |
| 5:34 • Intermediário                                     |
+----------------------------------------------------------+
```

---

## 🎯 **COPY & MESSAGING**

### Headline Principal
**Opção A**: "Biblioteca de Técnicas"
**Opção B**: "Aprenda. Pratique. Domine."
**Opção C**: "Sua Academia de Bolso"

### Subtitle
"Acesso exclusivo a dezenas de vídeos com técnicas, posições e treinos ministrados pelos nossos mestres campeões. Conteúdo novo toda semana."

### CTA (opcional)
"Quer acesso completo? Agende sua aula e receba login exclusivo para nossa plataforma."

### Empty Filters
"Nenhum vídeo encontrado para os filtros selecionados."

---

## 🧩 **COMPONENTES NECESSÁRIOS**

### 1. VideoLibrarySection.tsx
Componente principal da seção

### 2. VideoGrid.tsx
Grid de vídeos com filtros

### 3. VideoCard.tsx
Card individual de vídeo
```tsx
<VideoCard>
  <VideoCard.Thumbnail src="..." />
  <VideoCard.PlayButton />
  <VideoCard.Duration>1:24</VideoCard.Duration>
  <VideoCard.Content>
    <VideoCard.Title>Jab Cruzado</VideoCard.Title>
    <VideoCard.Meta>Boxe • Iniciante</VideoCard.Meta>
    <VideoCard.Badge level="iniciante" />
  </VideoCard.Content>
</VideoCard>
```

### 4. VideoModal.tsx
Modal com player

### 5. YouTubeEmbed.tsx
Player customizado do YouTube

### 6. VideoFilters.tsx
Sistema de filtros

### 7. VideoSearch.tsx
Barra de busca

---

## 🚀 **INTERATIVIDADE**

### State Management
```typescript
const [videos, setVideos] = useState<Video[]>(allVideos);
const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
const [filters, setFilters] = useState({
  modality: "all",
  level: null,
  type: null,
});
const [searchTerm, setSearchTerm] = useState("");
const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
```

### Filtros
```typescript
const filteredVideos = videos.filter(video => {
  const matchesModality = filters.modality === "all" || video.modality === filters.modality;
  const matchesLevel = !filters.level || video.level === filters.level;
  const matchesType = !filters.type || video.type === filters.type;
  const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        video.tags.some(tag => tag.includes(searchTerm.toLowerCase()));

  return matchesModality && matchesLevel && matchesType && matchesSearch;
});
```

---

## 📊 **ANALYTICS (Opcional)**

Rastrear:
- Vídeos mais visualizados
- Filtros mais usados
- Termos de busca populares
- Taxa de play (quantos clicam vs quantos veem)
- Tempo médio assistido

---

## 🎨 **INSPIRAÇÕES VISUAIS**

### Similar a:
- **Netflix**: Grid de thumbnails, hover effects
- **YouTube**: Player, relacionados, descrição
- **Udemy/Coursera**: Filtros, níveis, badges
- **Vimeo**: Player clean e elegante

### Diferenciais:
- Tema escuro total (preto/branco)
- Glow effects premium
- Transições suaves
- Modal imersivo

---

## 📋 **CHECKLIST DE IMPLEMENTAÇÃO**

### Setup
- [ ] Criar interface TypeScript dos vídeos
- [ ] Criar array de dados mockado (15 vídeos)
- [ ] Setup YouTube IDs

### Componentes
- [ ] VideoLibrarySection
- [ ] VideoGrid
- [ ] VideoCard (com composition)
- [ ] VideoModal
- [ ] YouTubeEmbed
- [ ] VideoFilters
- [ ] VideoSearch
- [ ] ViewToggle (Grid/List)

### Funcionalidades
- [ ] Sistema de filtros funcionando
- [ ] Busca em tempo real
- [ ] Modal open/close
- [ ] Navegação prev/next no modal
- [ ] Keyboard navigation (ESC, arrows)
- [ ] Scroll lock no modal
- [ ] Lazy loading de thumbnails
- [ ] Load more / pagination

### Design
- [ ] Hover effects nos cards
- [ ] Glow effects
- [ ] Skeleton loaders
- [ ] Empty states
- [ ] Responsividade total
- [ ] Badges estilizados
- [ ] Transitions suaves

### Otimização
- [ ] Debounce na busca
- [ ] Lazy load de imagens
- [ ] Virtualization se muitos vídeos
- [ ] YouTube embed leve

---

## 🎯 **POSICIONAMENTO NA LANDING PAGE**

**Sugestão de ordem**:
```
1. Navbar
2. Hero
3. Stats
4. Showcase (fotos/vídeos curtos)
5. ⭐ VIDEO LIBRARY ⭐ <- Aqui
6. Modalidades
7. Masters
...
```

**Ou alternativa**:
```
...
5. Modalidades
6. ⭐ VIDEO LIBRARY ⭐ <- Após mostrar as modalidades
7. Masters
...
```

**Razão**: Colocar após Showcase ou Modalidades para que o visitante já esteja interessado e queira ver mais conteúdo.

---

## 💡 **IDEIAS EXTRAS (V2)**

### Future Features:
1. **Playlists**: Agrupar vídeos em sequências de treino
2. **Favoritos**: Usuário pode favoritar vídeos
3. **Progresso**: Marcar vídeos como "assistido"
4. **Comentários**: Seção de comentários (embed do YouTube)
5. **Download**: Download para assistir offline (premium)
6. **Velocidade**: Controle de velocidade do vídeo
7. **Legendas**: CC em PT-BR
8. **Live Classes**: Integrar aulas ao vivo

---

## 🎬 **EXEMPLO DE VÍDEOS PARA POPULAR**

### Muay Thai (4 vídeos)
1. "Low Kick Perfeito - Técnica e Posicionamento" - Iniciante - 0:58
2. "Clinch de Muay Thai - Dominação" - Intermediário - 1:35
3. "Joelhada Voadora - Avançado" - Avançado - 1:12
4. "Sequência de Socos e Chutes" - Intermediário - 2:05

### Jiu-Jitsu (4 vídeos)
1. "Passagem de Guarda Básica" - Iniciante - 1:20
2. "Kimura do Lado - Finalização" - Avançado - 2:15
3. "Raspagem da Meia Guarda" - Intermediário - 1:45
4. "Triangle Choke - Setup Completo" - Avançado - 1:58

### Boxe (4 vídeos)
1. "Jab Cruzado - Fundamento" - Iniciante - 1:24
2. "Esquivas e Contra-Ataques" - Intermediário - 1:50
3. "Uppercut Perfeito" - Intermediário - 1:05
4. "Footwork Avançado - Movimento no Ring" - Avançado - 2:30

### MMA / Geral (3 vídeos)
1. "Aquecimento Pré-Treino - 10 Minutos" - Iniciante - 0:45
2. "Defesa de Quedas - MMA" - Intermediário - 1:40
3. "Transição Striking para Grappling" - Avançado - 2:00

---

**Esta Video Library vai diferenciar completamente a landing page de qualquer outra academia de artes marciais.** 🔥
