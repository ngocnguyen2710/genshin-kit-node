export function _getApiEndpoint(this: any): string {
  switch (this.serverType) {
    case 'os':
      return 'https://bbs-api-os.mihoyo.com/game_record/genshin/api/'
    case 'cn':
    default:
      return 'https://api-takumi.mihoyo.com/game_record/app/genshin/api/'
  }
}
