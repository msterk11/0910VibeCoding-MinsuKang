import profile from "@/data/profile.json";
import type { Profile } from "@/types/profile";

/**
 * 프로필 데이터에 접근하는 유일한 진입점.
 * 지금은 로컬 JSON을 그대로 반환하지만, 나중에 DB를 붙일 때
 * 이 함수 내부만 교체하면 호출부는 그대로 둘 수 있도록 async로 둔다.
 */
export async function getProfile(): Promise<Profile> {
  return profile as Profile;
}
